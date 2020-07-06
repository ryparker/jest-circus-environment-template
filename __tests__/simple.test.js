/**
 * @my-custom-pragma At top of file
 */

/**
 * @my-custom-pragma above-test
 */
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3)
})

test('adds 2 + 2 to equal 4', () => {
  /**
   * @my-custom-pragma under-test
   */
  expect(2 + 2).toBe(4)
})

test('adds 3 + 2 to equal 5', () => {
  expect(3 + 2).toBe(5)
})
