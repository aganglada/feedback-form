import * as React from 'react'
import {
  RatingStar,
  RatingLabel,
  RatingWrapper,
  RatingLegend,
} from './Rating.styled'

type Props = {
  value: number
}

const ratings: { [k: string]: string } = {
  1: 'Terrible',
  2: 'Not good',
  3: 'Average',
  4: 'Very good',
  5: 'Amazing',
}

function Rating(props: Props): JSX.Element {
  return (
    <RatingWrapper>
      <RatingLegend>Rating</RatingLegend>
      {Object.keys(ratings).map((rating) => {
        return (
          <React.Fragment key={rating}>
            <RatingStar
              type="radio"
              id={`first-rate-${rating}`}
              name="rating"
              value={rating}
              defaultChecked={String(props.value) === rating}
            />
            <RatingLabel
              htmlFor={`first-rate-${rating}`}
              title={ratings[rating]}
            >
              {rating} star
            </RatingLabel>
          </React.Fragment>
        )
      })}
    </RatingWrapper>
  )
}

export default Rating
