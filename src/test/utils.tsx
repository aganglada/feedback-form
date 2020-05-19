import * as React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../core/styled/theme'

const TestApp: React.FC = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

function customRender(
  ui: React.ReactElement<any>,
  options?: Pick<RenderOptions, Exclude<keyof RenderOptions, 'queries'>>
) {
  return render(ui, { wrapper: TestApp, ...options })
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'

export { customRender as render }
