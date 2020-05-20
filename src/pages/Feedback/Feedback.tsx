import * as React from 'react'
import Layout from '../../core/Layout'
import useForm from '../../core/hooks/useForm'
import { feedbackFormValidation } from '../../core/utils/validation'
import Input from '../../components/Form/Input'
import Textarea from '../../components/Form/Textarea'
import Button from '../../components/Form/Button'
import Rating from '../../components/Rating/Rating'
import Comment from '../../components/Comment/Comment'
import {
  FeedbackWrapper,
  FeedbackForm,
  FeedbackFiledsLegend,
  FeedbackFileds,
  FeedbackGraph,
  FeedbackLatestComment,
  FeedbackTitle,
} from './Feedback.styled'
import { useComment } from '../../core/context/comment'

const Graph = React.lazy(() =>
  import(/* webpackChunkName: "graph" */ '../../components/Graph/Graph')
)

function Feedback(): JSX.Element {
  const { comments, setComments } = useComment()
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
      .then((comment) => {
        setComments((comments: Comment[]) => [
          ...comments,
          { ...comment, datetime: Date.now() },
        ])
        feedbackForm.resetForm()
      })
      .catch(() => {})
  }

  return (
    <Layout>
      <FeedbackWrapper>
        <FeedbackForm onSubmit={submit} data-testid="feedback-form" noValidate>
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
            <Rating
              value={feedbackForm.fields.rating}
              onChange={feedbackForm.onFieldChange}
            />
            <Textarea
              label="Comment"
              id="comment"
              name="comment"
              onChange={feedbackForm.onFieldChange}
              value={feedbackForm.fields.comment}
              invalid={Boolean(feedbackForm.errors.comment)}
              message={feedbackForm.errors.comment}
              required
            ></Textarea>
            <Button>Add Feedback</Button>
          </FeedbackFileds>
        </FeedbackForm>
        <FeedbackGraph data-testid="graph">
          <Graph data={comments} />
        </FeedbackGraph>
      </FeedbackWrapper>
      <FeedbackLatestComment>
        {comments.length > 0 ? (
          <>
            <FeedbackTitle>Latest Comments</FeedbackTitle>
            {comments.map((comment, i) => {
              return (
                <Comment
                  key={i}
                  author={{ name: comment.name, email: comment.email }}
                  text={comment.comment}
                  rating={comment.rating}
                />
              )
            })}
          </>
        ) : null}
      </FeedbackLatestComment>
    </Layout>
  )
}

export default Feedback
