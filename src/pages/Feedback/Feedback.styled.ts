import styled from 'styled-components'
import { visuallyHidden } from '../../core/styled/snippets'
import media from '../../core/styled/media'
import { addPx } from '../../core/styled/utils'
import { space } from '../../core/styled/variables'

export const FeedbackWrapper = styled.div`
  display: grid;
  grid-gap: ${addPx(space.medium)};
  grid-template-columns: repeat(1, 1fr);

  @media (${media.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const FeedbackForm = styled.form`
  flex: 1;
`

export const FeedbackFileds = styled.fieldset``

export const FeedbackFiledsLegend = styled.legend`
  ${visuallyHidden}
`

export const FeedbackGraph = styled.div`
  flex: 1;
`
