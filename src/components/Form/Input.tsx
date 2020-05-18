import * as React from 'react'
import { InputWithComposition } from '../../core/typings/form'
import ErrorMessage from './ErrorMessage'
import {
  FormInputTextWrapper,
  FormInputWrapper,
  FormInputText,
  FormLabel,
} from './Form.styled'

const Input = React.forwardRef(
  (
    { id, ...props }: InputWithComposition,
    ref?: React.Ref<HTMLInputElement>
  ): JSX.Element => {
    const validationProps =
      props.invalid && props.message
        ? {
            'aria-describedby': `${id}-error`,
          }
        : {}

    return (
      <FormInputTextWrapper expanded={Boolean(props.value)}>
        <FormInputWrapper>
          <FormInputText
            id={id}
            aria-invalid={Boolean(props.invalid)}
            ref={ref}
            {...validationProps}
            {...props}
          />
          <FormLabel htmlFor={id}>
            {props.label}
            {props.required && ' *'}
          </FormLabel>
        </FormInputWrapper>
        {props.invalid && props.message ? (
          <ErrorMessage
            id={`${id}-error`}
            data-testid={`input-error-message-${id}`}
          >
            {props.message}
          </ErrorMessage>
        ) : null}
      </FormInputTextWrapper>
    )
  }
)

Input.defaultProps = {
  type: 'text',
}

export default Input
