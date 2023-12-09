# vite-plugin-import-wc

Vite plugin for importing vue component as web component

## Why?

- Uses async import
- Auto registers with provided name

## Usage

```ts
import getApp from './App?ce'

function init() {
  // Only the first getApp() call registers the component with the given name
  const app = await getApp('my-custom-app')
  document.body.appendChild(app)
}
```
