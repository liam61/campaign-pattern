/**
 * Importing of describe, it, expect etc are not required.
 *
 * Vitest functions are registered globally.
 */

beforeEach(() => {
  // outer1
})

afterEach(() => {
  // outer2
})

describe('Math', () => {
  beforeEach(() => {
    // inner1
  })

  afterEach(() => {
    // inner2
  })

  it('should return 2 for square root of 4', () => {
    expect(Math.sqrt(4)).toBe(2)
  })
})

describe('jest', () => {
  it('should a item in inside an array', () => {
    expect([1, 2, 3, 4]).toContain(2)
  })
})
