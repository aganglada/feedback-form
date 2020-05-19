import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './styled/theme'
import Feedback from '../pages/Feedback/Feedback'
import { CommentProvider } from './context/comment'

function App(): JSX.Element {
  return (
    <React.Suspense fallback="loading...">
      <ThemeProvider theme={theme}>
        <CommentProvider>
          <Feedback />
        </CommentProvider>
      </ThemeProvider>
    </React.Suspense>
  )
}

export default App
