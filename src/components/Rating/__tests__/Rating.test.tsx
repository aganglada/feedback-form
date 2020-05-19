import * as React from 'react'
import { render, screen, userEvent } from '@test/utils'
import Rating from '../Rating'

test('Rating renders and functions correctly', () => {
  const onChange = jest.fn()
  render(<Rating value={3} onChange={onChange} />)

  expect(screen.getByLabelText('1 star')).toBeInTheDocument()
  expect(screen.getByLabelText('2 star')).toBeInTheDocument()
  expect(screen.getByLabelText('3 star')).toBeInTheDocument()
  expect(screen.getByLabelText('3 star')).toHaveAttribute('checked')
  expect(screen.getByLabelText('4 star')).toBeInTheDocument()
  expect(screen.getByLabelText('5 star')).toBeInTheDocument()

  userEvent.click(screen.getByLabelText('1 star'))

  expect(onChange).toHaveBeenCalled()
})
