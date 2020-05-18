import * as React from 'react'
import Layout from '../../core/Layout'
import Input from '../../components/Form/Input'
import Textarea from '../../components/Form/Textarea'
import Button from '../../components/Form/Button'
import Rating from '../../components/Rating/Rating'
import {
  FeedbackWrapper,
  FeedbackForm,
  FeedbackFiledsLegend,
  FeedbackFileds,
  FeedbackGraph,
} from './Feedback.styled'
import useForm from '../../core/hooks/useForm'
import { feedbackFormValidation } from '../../core/utils/validation'

function Feedback(): JSX.Element {
  const feedbackForm = useForm(
    {
      name: '',
      email: '',
      rating: 1,
      comment: '',
    },
    { validation: feedbackFormValidation }
  )

  function submit(event: React.FormEvent<HTMLFormElement>) {
    feedbackForm
      .onSubmit(event)
      .then(() => {})
      .catch()
  }

  return (
    <Layout>
      <FeedbackWrapper>
        <FeedbackForm onSubmit={submit} noValidate>
          <FeedbackFileds>
            <FeedbackFiledsLegend>Feedback fields</FeedbackFiledsLegend>
            <Input
              label="Name"
              id="name"
              name="name"
              value={feedbackForm.fields.name}
              onChange={feedbackForm.onFieldChange}
              invalid={Boolean(feedbackForm.errors.name)}
              message={feedbackForm.errors.name}
              required
            />
            <Input
              label="Email"
              type="email"
              id="email"
              name="email"
              value={feedbackForm.fields.email}
              onChange={feedbackForm.onFieldChange}
              invalid={Boolean(feedbackForm.errors.email)}
              message={feedbackForm.errors.email}
              required
            />
            <Rating value={feedbackForm.fields.rating} />
            <Textarea
              label="Comment"
              id="comment"
              name="comment"
              onChange={feedbackForm.onFieldChange}
              invalid={Boolean(feedbackForm.errors.comment)}
              message={feedbackForm.errors.comment}
              required
            >
              {feedbackForm.fields.comment}
            </Textarea>
            <Button>Add Feedback</Button>
          </FeedbackFileds>
        </FeedbackForm>
        <FeedbackGraph>graph</FeedbackGraph>
      </FeedbackWrapper>
    </Layout>
  )
}

export default Feedback
