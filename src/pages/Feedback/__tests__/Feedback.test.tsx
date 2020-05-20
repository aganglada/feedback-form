import * as React from 'react'
import { render, screen, waitFor, userEvent } from '@test/utils'
import { CommentProvider } from '../../../core/context/comment'
import Feedback from '../Feedback'

test('Feedback to throw an error if it is render outside a CommentProvider', () => {
  console.error = jest.fn()

  expect(() => render(<Feedback />)).toThrowError(
    /useComment must be used within CommentProvider/
  )
  expect(console.error).toHaveBeenCalled()
})

test('Feedback renders and functions correctly', async () => {
  console.warn = jest.fn()
  render(
    <React.Suspense fallback="loading...">
      <CommentProvider>
        <Feedback />
      </CommentProvider>
    </React.Suspense>
  )

  expect(screen.getByTestId('header-title')).toBeInTheDocument()
  expect(screen.getByText(/feedback fields/i)).toBeInTheDocument()

  await waitFor(() => {
    expect(screen.getByTestId('graph')).not.toBeEmpty()
    expect(console.warn).toHaveBeenCalled()
  })

  const name = screen.getByLabelText('Name *')
  const email = screen.getByLabelText('Email *')
  const rating1star = screen.getByLabelText('1 star')
  const rating2star = screen.getByLabelText('2 star')
  const rating3star = screen.getByLabelText('3 star')
  const rating4star = screen.getByLabelText('4 star')
  const rating5star = screen.getByLabelText('5 star')
  const comment = screen.getByLabelText('Comment *')
  const submit = screen.getByRole('button', { name: 'Add Feedback' })

  expect(name).toBeInTheDocument()
  expect(email).toBeInTheDocument()
  expect(rating1star).toBeInTheDocument()
  expect(rating2star).toBeInTheDocument()
  expect(rating3star).toBeInTheDocument()
  expect(rating4star).toBeInTheDocument()
  expect(rating5star).toBeInTheDocument()
  expect(comment).toBeInTheDocument()
  expect(submit).toBeInTheDocument()

  expect(screen.getByText(/alejandro garcia anglada/i)).toBeInTheDocument()
  expect(screen.getByText(/emily arack/i)).toBeInTheDocument()
  expect(screen.getByText(/tez ilyas/i)).toBeInTheDocument()

  userEvent.click(submit)

  expect(screen.getByText(/name is required/i)).toBeInTheDocument()
  expect(screen.getByText(/email is required/i)).toBeInTheDocument()
  expect(screen.getByText(/comment is required/i)).toBeInTheDocument()

  userEvent.type(name, 'test user')

  userEvent.click(submit)

  expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument()
  expect(screen.getByText(/email is required/i)).toBeInTheDocument()
  expect(screen.getByText(/comment is required/i)).toBeInTheDocument()

  userEvent.type(email, 'test.user@gmail')

  userEvent.click(submit)

  expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument()
  expect(screen.queryByText(/email is required/i)).not.toBeInTheDocument()
  expect(
    screen.getByText(/Email should be valid \(eg. example@domain.com\)/i)
  ).toBeInTheDocument()
  expect(screen.getByText(/comment is required/i)).toBeInTheDocument()

  userEvent.type(email, '.com')
  userEvent.click(rating3star)

  userEvent.click(submit)

  expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument()
  expect(screen.queryByText(/email is required/i)).not.toBeInTheDocument()
  expect(
    screen.queryByText(/email should be valid \(eg. example@domain.com\)/i)
  ).not.toBeInTheDocument()
  expect(screen.getByText(/comment is required/i)).toBeInTheDocument()

  userEvent.type(comment, 'Love the app, thank you')

  userEvent.click(submit)

  expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument()
  expect(screen.queryByText(/email is required/i)).not.toBeInTheDocument()
  expect(
    screen.queryByText(/email should be valid \(eg. example@domain.com\)/i)
  ).not.toBeInTheDocument()
  expect(screen.queryByText(/comment is required/i)).not.toBeInTheDocument()

  await waitFor(() => {
    expect(screen.getAllByTestId('comment-image')).toHaveLength(4)
  })

  expect(
    screen.getByText(/test user \(test.user@gmail.com\)/i)
  ).toBeInTheDocument()
  expect(screen.getByText(/love the app, thank you/i)).toBeInTheDocument()
  expect(screen.getByText(/rating: 3/i)).toBeInTheDocument()
})
