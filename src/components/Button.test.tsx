import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from './Button'

describe('Button component', () => {
  it('renders with label', () => {
    render(<Button label="Click me" />)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
