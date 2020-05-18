import * as React from 'react'
import styled from 'styled-components'
import { addPx } from '../../core/styled/utils'
import { space, fontSize } from '../../core/styled/variables'

type ErrorMessageProps = {
  children: React.ReactNode
  id: string
}

type ParagraphComposition = Omit<
  React.HTMLProps<HTMLParagraphElement>,
  'ref' | 'as' | 'role'
>

type ErrorMessageWithComposition = ParagraphComposition & ErrorMessageProps

const ErrorMessageText = styled.p.attrs({
  role: 'alert',
})`
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.errorColor};
  padding: ${addPx(space.small / 2)} 0;
  font-size: ${addPx(fontSize.small)};
`

function ErrorMessage({
  id,
  children,
  ...props
}: ErrorMessageWithComposition): JSX.Element {
  return (
    <ErrorMessageText id={id} {...props}>
      {children}
    </ErrorMessageText>
  )
}

export default ErrorMessage
