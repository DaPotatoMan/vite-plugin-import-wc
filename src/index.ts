import type { PluginOption } from 'vite'

function build(src: string) {
  return `
    import { defineCustomElement } from 'vue';

    let App;
    
    async function register(name) {
      if (App) return App;

      const file = await import('${src}');
      App = defineCustomElement(file.default);
      customElements.define(name, App);

      return App;
    }

    export default register;
  `
}

export default function(): PluginOption {
  const name = 'vite-plugin-import-wc'
  const resolverID = `\0${name}`
  const suffix = '?ce'

  return {
    name: name,
    enforce: 'pre',

    async resolveId(id, importer) {
      if (!id.includes(`.vue${suffix}`)) return
      if (!importer) return id

      const [src] = id.split(suffix)
      const realID = await this.resolve(src, importer)

      if (!realID)
        throw new Error(`Vue file ${id} not found!`)

      return `${resolverID}:${realID.id}`
    },

    load(id) {
      if (id.startsWith(resolverID)) {
        const [_, ...src] = id.split(':')
        return build(src.join(':'))
      }
    }
  }
}
