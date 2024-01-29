import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import Button from './index'

describe('Button', () => {
    it('renders text correctly', () => {
        render(<Button size='large' variant='primary'>Custom Specific Button 5%</Button>)
        expect(screen.getByTestId('button')).toHaveTextContent('Custom Specific Button 5%')
    })
    
    it('clickable', () => {
        const handleClick = vi.fn()

        render(<Button size='large' variant='primary' onClick={handleClick}>Button</Button>)
        fireEvent.click(screen.getByTestId("button"))
        expect(handleClick).toHaveBeenCalledOnce()
    })

    it('not clickable when disabled', () => {
        const handleClick = vi.fn()

        render(<Button size='large' variant='primary' onClick={handleClick} disabled>Button</Button>)
        fireEvent.click(screen.getByTestId("button"))
        expect(handleClick).toHaveBeenCalledTimes(0)
    })

    it('not clickable when loading', () => {
        const handleClick = vi.fn()

        render(<Button size='large' variant='primary' onClick={handleClick} isLoading>Button</Button>)
        fireEvent.click(screen.getByTestId("button"))
        expect(handleClick).toHaveBeenCalledTimes(0)
    })
})