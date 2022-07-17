import echo from 'wasmio'

test('it should just work', () => {
  expect(echo()).toBe('Hello World!')
})
