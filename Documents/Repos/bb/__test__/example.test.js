// example.test.js
const sum = require('../src/sum'); // Assuming there is a function named 'sum' in src directory

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});