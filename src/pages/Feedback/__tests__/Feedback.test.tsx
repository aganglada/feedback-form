import * as React from 'react'
import { render, screen, waitFor } from '@test/utils'
import { CommentProvider } from '../../../core/context/comment'
import Feedback from '../Feedback'

test('Header renders correctly', async () => {
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

  // TODO: Continue test
  screen.debug(document.body)
})
