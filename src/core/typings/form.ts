import * as React from 'react'

export type InputComposition<T> = Omit<
  React.HTMLProps<T>,
  'ref' | 'as' | 'label'
>

export type InputProps<T> = {
  id: string
  label: React.ReactNode
  message?: string
  invalid?: boolean
  ref?: React.Ref<T>
}

export type InputWithComposition<T = HTMLInputElement> = InputProps<T> &
  InputComposition<T>

export enum FormActionTypes {
  ChangeInput = 'ChangeInput',
  Submit = 'Submit',
  SetErrors = 'SetErrors',
  Reset = 'Reset',
}

export type FormAction = {
  payload: any
  type: keyof typeof FormActionTypes
}

export type FormValidation<T> = {
  field: keyof T
  validate: (value: any) => boolean
  message: string
}

export type FormErrors<T> = { [key in keyof T]?: string }

export type FormErrorsMap<T> = Map<keyof T | string, string>

export type FormOptions<T> = {
  validation?: FormValidation<T>[]
}

export type UseForm<T> = {
  fields: T
  errors: FormErrors<T>
  onFieldChange: (event: React.ChangeEvent<any>) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<any>
  resetForm: () => void
}
