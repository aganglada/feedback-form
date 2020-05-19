import styled from 'styled-components'
import { visuallyHidden } from '../../core/styled/snippets'
import media from '../../core/styled/media'
import { addPx } from '../../core/styled/utils'
import { space, fontSize } from '../../core/styled/variables'

export const FeedbackWrapper = styled.div`
  display: grid;
  grid-gap: ${addPx(space.medium)};
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: ${addPx(space.xlarge)};

  @media (${media.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const FeedbackForm = styled.form``

export const FeedbackFileds = styled.fieldset``

export const FeedbackFiledsLegend = styled.legend`
  ${visuallyHidden}
`

export const FeedbackGraph = styled.div`
  height: 394px;
  width: 100%;
  background-color: ${(p) => p.theme.brandColor};
`

export const FeedbackLatestComment = styled.div``

export const FeedbackTitle = styled.h2`
  margin-bottom: ${addPx(space.medium)};
  font-weight: bold;
  font-size: ${addPx(fontSize.large)};
`
