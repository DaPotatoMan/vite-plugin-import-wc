import { it, expect, describe } from 'vitest'
import getApp from './App.vue?ce'


describe('plugin',async () => {
  const App = await getApp('my-app')
  const app = new App()

  it('can mount to element', async () => {
    const body = document.createElement('body')
    body.appendChild(app)
    expect(body).toMatchSnapshot()
  })
})
