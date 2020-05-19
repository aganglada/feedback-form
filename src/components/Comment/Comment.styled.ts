import styled from 'styled-components'
import { addPx } from '../../core/styled/utils'
import { space, fontSize } from '../../core/styled/variables'

export const CommentWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${addPx(space.medium)};
`

export const CommentImage = styled.img`
  border-radius: 50%;
  margin-right: ${addPx(space.medium)};
`

export const CommentDetails = styled.div``

export const CommentAuthor = styled.strong`
  font-weight: bold;
`

export const CommentText = styled.p`
  font-size: ${addPx(fontSize.small)};
`

export const CommentRating = styled.small`
  font-size: ${addPx(fontSize.small)};
  color: rgba(0, 0, 0, 0.5);
`
