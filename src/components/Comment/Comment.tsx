//https://eu.ui-avatars.com/api/?name=Alejandro%20Anglada
import * as React from 'react'
import {
  CommentWrapper,
  CommentDetails,
  CommentText,
  CommentAuthor,
  CommentImage,
  CommentRating,
} from './Comment.styled'

type Props = {
  author: {
    name: string
    email: string
  }
  text: string
  rating: number
}

function Comment(props: Props): JSX.Element {
  return (
    <CommentWrapper>
      <CommentImage
        data-testid="comment-image"
        src={`https://eu.ui-avatars.com/api/?name=${props.author.name}`}
      />
      <CommentDetails>
        <CommentAuthor>
          {props.author.name} ({props.author.email})
        </CommentAuthor>
        <CommentText>{props.text}</CommentText>
        <CommentRating>Rating: {props.rating}</CommentRating>
      </CommentDetails>
    </CommentWrapper>
  )
}

export default Comment
