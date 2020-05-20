import * as React from 'react'
import {
  FormAction,
  UseForm,
  FormOptions,
  FormActionTypes,
  FormErrorsMap,
} from '../typings/form'

function useForm<T>(fields: T, { validation }: FormOptions<T>): UseForm<T> {
  type FormState = Pick<UseForm<T>, 'fields' | 'errors'>

  function reducer(state: FormState, action: FormAction) {
    switch (action.type) {
      case FormActionTypes.ChangeInput:
        return {
          ...state,
          fields: {
            ...state.fields,
            [action.payload.name]: action.payload.value,
          },
        }

      case FormActionTypes.SetErrors:
        return {
          ...state,
          errors: action.payload,
        }

      case FormActionTypes.Reset:
        return {
          ...state,
          fields,
        }

      default:
        return state
    }
  }

  const initialState: FormState = {
    fields,
    errors: {},
  }

  const [state, dispatch] = React.useReducer(reducer, initialState)

  return {
    errors: state.errors,
    fields: state.fields,
    onFieldChange(event) {
      dispatch({
        type: FormActionTypes.ChangeInput,
        payload: {
          name: event.target.name,
          value: event.target.value,
        },
      })
    },
    onSubmit(event) {
      event.preventDefault()
      const errorsMap: FormErrorsMap<T> = new Map()

      if (validation) {
        dispatch({
          type: FormActionTypes.SetErrors,
          payload: {},
        })

        validation.forEach((validationItem) => {
          if (
            !errorsMap.get(validationItem.field) &&
            !validationItem.validate(state.fields[validationItem.field])
          ) {
            errorsMap.set(validationItem.field, validationItem.message)
          }
        })

        let errors = Array.from(errorsMap).reduce(
          (obj, [key, value]) => Object.assign(obj, { [key]: value }),
          {}
        )

        dispatch({
          type: FormActionTypes.SetErrors,
          payload: errors,
        })

        if (errorsMap.size > 0) {
          const [fisrtFieldName] = Object.keys(errors)
          const field = document.querySelector(
            `[name="${fisrtFieldName}"]`
          ) as HTMLFormElement

          if (field) {
            field.focus()
          }

          return Promise.reject()
        }
      }

      return Promise.resolve(state.fields)
    },
    resetForm() {
      dispatch({ type: FormActionTypes.Reset, payload: {} })
    },
  }
}

export default useForm
