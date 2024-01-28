import { describe, expect, it } from 'vitest'
import isString from './'

describe('Main file', () => {
    it('string', () => {
        expect(isString('Hello')).toBe(true)
    })
    it('not string', () => {
        expect(isString({})).toBe(false)
    })
})