import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    brandColor: string
    backgroundColor: string
    fontColor: string
    errorColor: string
  }
}
