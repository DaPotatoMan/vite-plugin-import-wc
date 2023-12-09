# vite-plugin-import-wc

Vite plugin for importing vue component as web component

```ts
import getApp from './App?ce'

function init() {
  // Only the first getApp() call registers the component with the given name
  // Subsequent calls will return the last instance
  const app = getApp('my-custom-app')
  document.body.appendChild(app)
}
```
