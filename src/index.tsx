import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './core/App'

ReactDOM.render(<App />, document.getElementById('root'))

if ((module as any).hot) {
  ;(module as any).hot.accept('./core/App', () => {
    const App = require('./core/App').default
    ReactDOM.render(<App />, document.getElementById('root'))
  })
}
