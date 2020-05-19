import * as React from 'react'
import { HeaderWrappper, HeaderTitle } from './Header.styled'

function Header() {
  return (
    <HeaderWrappper>
      <HeaderTitle data-testid="header-title">Feedback</HeaderTitle>
    </HeaderWrappper>
  )
}

export default Header
