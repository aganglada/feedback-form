import * as React from 'react'
import { render, screen, waitFor } from '@test/utils'
import App from '../App'

test('App renders and correctly', async () => {
  console.warn = jest.fn()
  render(<App />)

  expect(screen.getByTestId('header-title')).toBeInTheDocument()

  await waitFor(() => {
    expect(screen.getByTestId('graph')).not.toBeEmpty()
    expect(console.warn).toHaveBeenCalled()
  })

  expect(screen.getByTestId('feedback-form')).toBeInTheDocument()
  expect(screen.getAllByTestId('comment-image')).toHaveLength(3)
})
