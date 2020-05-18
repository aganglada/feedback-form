import styled from 'styled-components'
import { addPx } from '../../core/styled/utils'
import { space } from '../../core/styled/variables'

export const HeaderWrappper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${addPx(space.medium)};
  margin-bottom: ${addPx(space.small)};
`

export const HeaderTitle = styled.h1`
  font-size: 30px;
  font-weight: 400;
`
