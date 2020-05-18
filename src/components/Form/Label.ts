import styled from 'styled-components'
import { addPx } from '../../core/styled/utils'
import { space } from '../../core/styled/variables'

export const Label = styled.label`
  display: inline-flex;
  align-self: flex-start;
  width: calc(100% - ${addPx(space.medium)});
  background: ${(p) => p.theme.backgroundColor};
`

export default Label
