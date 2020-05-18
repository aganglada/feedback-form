import styled, { css } from 'styled-components'
import Label from './Label'
import { addPx } from '../../core/styled/utils'
import { space, fontSize } from '../../core/styled/variables'

export const FormLabel = styled(Label)`
  position: absolute;
  top: -50%;
  left: 0;
  transform: translate(${addPx(space.large / 2)}, ${addPx(space.xlarge)});
  transition: all 300ms ease-in-out;
  color: ${(p) => p.theme.fontColor};
  padding: 0 ${addPx(space.small / 2)};
`

const inputInvalid = css`
  border-color: ${(p) => p.theme.errorColor};

  &:focus {
    border: 2px solid ${(p) => p.theme.errorColor};
  }

  &:focus + ${Label} {
    color: ${(p) => p.theme.errorColor};
  }
`

export const FormInputText = styled.input<{ invalid?: boolean }>`
  width: 100%;
  height: 54px;
  border: 1px solid ${(p) => p.theme.fontColor};
  padding: 0 ${addPx(space.medium)};
  margin-top: auto;
  color: ${(p) => p.theme.fontColor};
  outline: 0;
  filter: none;

  &:focus {
    border: 2px solid ${(p) => p.theme.brandColor};
  }

  &:focus + ${Label} {
    color: ${(p) => p.theme.brandColor};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0 30px ${(p) => p.theme.backgroundColor} inset !important;
  }

  ${(p) => (p.invalid ? inputInvalid : null)}
`

export const FormTextarea = styled(FormInputText)`
  height: ${addPx(space.xxlarge * 2)};
  width: 100%;
  padding-top: ${addPx(space.small)};
  resize: none;
  font: inherit;

  & + ${Label} {
    transform: translate(
      ${addPx(space.large / 2)},
      ${addPx(space.large * 2 + 5)}
    );
  }
`

const expanded = css`
  & ${Label} {
    width: auto;
    transform: translate(${addPx(space.large / 2)}, ${addPx(space.large / 2)});
    font-size: ${addPx(fontSize.small)};
  }
`
const expandedTextArea = css`
  & ${Label} {
    width: auto;
    transform: translate(${addPx(space.large / 2)}, ${addPx(space.xlarge)});
    font-size: ${addPx(fontSize.small)};
  }
`

export const FormInputWrapper = styled.div`
  position: relative;
  background: ${(p) => p.theme.backgroundColor};
`

export const FormInputTextWrapper = styled.div<{ expanded?: boolean }>`
  width: 100%;
  margin-bottom: ${addPx(space.medium)};

  &:focus-within {
    ${expanded}
  }

  ${(p) => (p.expanded ? expanded : null)}
`

export const FormTextareaWrapper = styled(FormInputTextWrapper)`
  &:focus-within {
    ${expandedTextArea}
  }

  ${(p) => (p.expanded ? expandedTextArea : null)}
`
