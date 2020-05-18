import * as React from 'react'
import { InputWithComposition } from '../../core/typings/form'
import ErrorMessage from './ErrorMessage'
import {
  FormInputWrapper,
  FormLabel,
  FormTextarea,
  FormTextareaWrapper,
} from './Form.styled'

const Textarea = React.forwardRef(
  (
    { id, children, ...props }: InputWithComposition<HTMLTextAreaElement>,
    ref?: React.Ref<HTMLTextAreaElement>
  ): JSX.Element => {
    const validationProps =
      props.invalid && props.message
        ? {
            'aria-describedby': `${id}-error`,
          }
        : {}

    return (
      <FormTextareaWrapper expanded={Boolean(children)}>
        <FormInputWrapper>
          <FormTextarea
            as="textarea"
            id={id}
            aria-invalid={Boolean(props.invalid)}
            ref={ref}
            {...validationProps}
            {...props}
          ></FormTextarea>
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
      </FormTextareaWrapper>
    )
  }
)

export default Textarea
