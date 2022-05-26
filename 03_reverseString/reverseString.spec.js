<<<<<<< HEAD
const reverseString = require('./reverseString')

describe('reverseString', () => {
  test('reverses single word', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });

  test('reverses multiple words', () => {
    expect(reverseString('hello there')).toEqual('ereht olleh')
  })

  test('works with numbers and punctuation', () => {
    expect(reverseString('123! abc!')).toEqual('!cba !321')
  })
  test('works with blank strings', () => {
    expect(reverseString('')).toEqual('')
  })
});
=======
const reverseString = require('./reverseString')

describe('reverseString', () => {
  test('reverses single word', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });

  test('reverses multiple words', () => {
    expect(reverseString('hello there')).toEqual('ereht olleh')
  })

  test('works with numbers and punctuation', () => {
    expect(reverseString('123! abc!')).toEqual('!cba !321')
  })
  test('works with blank strings', () => {
    expect(reverseString('')).toEqual('')
  })
});
>>>>>>> 1feaf175fd2f9a666f37f1d764506b6fdb57bd68
