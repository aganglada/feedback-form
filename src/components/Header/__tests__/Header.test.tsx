import * as React from 'react'
import { render, screen } from '@test/utils'
import Header from '../Header'

test('Header renders correctly', () => {
  render(<Header />)

  expect(screen.getByText(/feedback/i)).toBeInTheDocument()
})
