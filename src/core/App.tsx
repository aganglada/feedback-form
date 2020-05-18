import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './styled/theme'
import Feedback from '../pages/Feedback/Feedback'

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Feedback />
    </ThemeProvider>
  )
}

export default App
