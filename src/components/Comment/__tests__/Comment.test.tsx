import * as React from 'react'
import { render, screen } from '@test/utils'
import Comment from '../Comment'

test('Comment renders correctly when passing the correct data', () => {
  render(
    <Comment
      author={{
        name: 'Alejandro Garcia Anglada',
        email: 'aganglada@gmail.com',
      }}
      text="Really nice app"
      rating={4}
    />
  )

  expect(screen.getByTestId('comment-image')).toHaveAttribute(
    'src',
    'https://eu.ui-avatars.com/api/?name=Alejandro Garcia Anglada'
  )
  expect(
    screen.getByText(/alejandro garcia anglada \(aganglada@gmail.com\)/i)
  ).toBeInTheDocument()
  expect(screen.getByText(/really nice app/i)).toBeInTheDocument()
  expect(screen.getByText(/rating: 4/i)).toBeInTheDocument()
})
