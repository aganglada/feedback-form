import * as React from 'react'
import {
  RatingStar,
  RatingLabel,
  RatingWrapper,
  RatingLegend,
} from './Rating.styled'

type Props = {
  value: number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
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
              id={`rate-${rating}`}
              name="rating"
              value={rating}
              checked={String(props.value) === rating}
              onChange={props.onChange}
            />
            <RatingLabel htmlFor={`rate-${rating}`} title={ratings[rating]}>
              {rating} star
            </RatingLabel>
          </React.Fragment>
        )
      })}
    </RatingWrapper>
  )
}

export default Rating
