import styled from 'styled-components'
import { addPx } from '../../core/styled/utils'
import { space } from '../../core/styled/variables'

const Button = styled.button`
  background-color: ${(p) => p.theme.brandColor};
  color: ${(p) => p.theme.backgroundColor};
  padding: ${addPx(space.small)};
  width: 100%;
`

export default Button
