import { shuffleArray } from "../src/utils.js";

test("shuffleArray should return an array with the same elements in a different order", () => {
  const array = [1, 2, 3, 4, 5];
  let isDifferent = false;

  // Run the shuffle multiple times to reduce the chance of false negatives
  for (let i = 0; i < 10; i++) {
    const shuffled = shuffleArray([...array]);
    if (shuffled.join(",") !== array.join(",")) {
      isDifferent = true;
      break;
    }
  }

  expect(isDifferent).toBe(true); // Ensure at least one shuffle is different
  expect(array.sort()).toEqual([1, 2, 3, 4, 5]); // Ensure original array is unchanged
});

test("shuffleArray should not modify the original array", () => {
  const array = [1, 2, 3, 4, 5];
  const originalArray = [...array];
  shuffleArray(array);
  expect(array).toEqual(originalArray); // Ensure the original array remains unchanged
});

test.each([
  { input: [], expected: [] },
  { input: [42], expected: [42] },
])("shuffleArray should handle edge cases", ({ input, expected }) => {
  const shuffled = shuffleArray([...input]);
  expect(shuffled).toEqual(expected); // Ensure the result matches the expected output
});
