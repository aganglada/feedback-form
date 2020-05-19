import { FormValidation } from '../typings/form'

type FeedbackFormFields = {
  name: string
  email: string
  rating: number
  comment: string
}

export function isRequired(value: string) {
  return value.length > 0
}

export function isEmail(value: string) {
  return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value)
}

export const feedbackFormValidation: FormValidation<FeedbackFormFields>[] = [
  {
    field: 'name',
    validate: isRequired,
    message: 'Name is required',
  },
  {
    field: 'email',
    validate: isRequired,
    message: 'Email is required',
  },
  {
    field: 'email',
    validate: isEmail,
    message: 'Email should be valid (eg. example@domain.com)',
  },
  {
    field: 'comment',
    validate: isRequired,
    message: 'Comment is required',
  },
]
