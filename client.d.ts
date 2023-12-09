declare module '*.vue?ce' {
  import type { ExtractPropTypes, VueElementConstructor } from 'vue'

  const getter: <T = {}>(name: string) => Promise<VueElementConstructor<ExtractPropTypes<T>>>
  export default getter
}
