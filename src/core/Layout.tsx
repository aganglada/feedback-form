import * as React from 'react'
import Header from '../components/Header/Header'
import styled from 'styled-components'
import BaseStyles from '../core/styled/base'
import { space } from './styled/variables'
import { addPx } from './styled/utils'

const LayoutMain = styled.main`
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 ${addPx(space.medium)};
`

type Props = {
  children?: React.ReactNode
}

function Layout(props: Props): JSX.Element {
  return (
    <>
      <BaseStyles />
      <Header />
      <LayoutMain>{props.children}</LayoutMain>
    </>
  )
}

export default Layout
