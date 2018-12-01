const javascript = {
  components: [
    {
      fileName: 'app/actions.js',
      code: `
export const toggleAwesomeApp = ({ state }) =>
  state.isAwesome = !state.isAwesome
    `,
    },
    {
      fileName: 'components/App.js',
      target: 'jsx',
      code: `
import { h } from 'overmind-components'

const App = ({ app }) => (
  <button onClick={app.actions.toggleAwesomeApp}>
    Toggle awesome
  </button>
)

export default App
    `,
    },
  ],
  react: [
    {
      fileName: 'app/actions.js',
      code: `
export const toggleAwesomeApp = ({ state }) =>
  state.isAwesome = !state.isAwesome
    `,
    },
    {
      fileName: 'components/App.js',
      target: 'jsx',
      code: `
import React from 'react'
import { connect } from '../app'

const App = ({ app }) => (
  <button onClick={app.actions.toggleAwesomeApp}>
    Toggle awesome
  </button>
)

export default connect(App)
    `,
    },
  ],
  vue: [
    {
      fileName: 'app/actions.js',
      code: `
export const toggleAwesomeApp = ({ state }) =>
  state.isAwesome = !state.isAwesome
    `,
    },
    {
      fileName: 'components/App.vue (template)',
      target: 'markup',
      code: `
<button v-on:click="app.actions.toggleAwesomeApp()">
  Toggle awesome
</button>
    `,
    },
    {
      fileName: 'components/App.vue (script)',
      code: `
import { connect } from '../app'

export default connect({})
  `,
    },
  ],
}

const typescript = {
  components: [
    {
      fileName: 'app/actions.ts',
      code: `
import { Action } from 'overmind'

export const toggleAwesomeApp: Action = ({ state }) =>
  state.isAwesome = !state.isAwesome
    `,
    },
    {
      fileName: 'components/App.tsx',
      code: `
import { h } from 'overmind-components'
import { Component } from '../app'

const App: Component = ({ actions }) => (
  <button onClick={actions.toggleAwesomeApp}>
    Toggle awesome
  </button>
)

export default App
    `,
    },
  ],
  react: [
    {
      fileName: 'app/actions.ts',
      code: `
import { Action } from 'overmind'

export const toggleAwesomeApp: Action = ({ state }) =>
  state.isAwesome = !state.isAwesome
    `,
    },
    {
      fileName: 'components/App.tsx',
      code: `
import * as React from 'react'
import { Connect, connect } from '../app'

const App: React.SFC<Connect> = ({ app }) => (
  <button onClick={app.actions.toggleAwesomeApp}>
    Toggle awesome
  </button>
)

export default connect(App)
    `,
    },
  ],
  vue: javascript.vue,
  angular: [
    {
      fileName: 'app/actions.ts',
      code: `
import { Action } from 'overmind'

export const toggleAwesomeApp: Action = ({ state }) =>
  state.isAwesome = !state.isAwesome
    `,
    },
    {
      fileName: 'components/app.component.ts',
      code: `
import { Component } from '@angular/core';
import { connect } from '../app'

@Component({
  selector: 'app-root',
  template: \`
  <button (click)="app.actions.toggleAwesomeApp()">
    Toggle awesome
  </button>
  \`
})
@connect()
export class App {}
    `,
    },
  ],
}

export default (ts, view) => (ts ? typescript[view] : javascript[view])
