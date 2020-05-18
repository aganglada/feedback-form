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
    field: 'comment',
    validate: isRequired,
    message: 'Comment is required',
  },
]
