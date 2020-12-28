import toBinaryString from '../utils';

test.each([
  [1, '1'],
  [2, '10'],
  [5, '101'],
])('.toBinaryString(%i)', (number, binaryString) => {
  expect(toBinaryString(number)).toMatch(binaryString);
});
