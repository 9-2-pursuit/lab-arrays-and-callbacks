const {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  firstNumIndexDivisibleBy3,
  firstWordIndexLessThan2Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesSquaredTimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
} = require("../solution.js");

// Don't match the test data from solution code
// Students tend to skip passing in a parameter in their solutions
const { nums, words } = require("../data/data.js");

describe("Array Methods", () => {
  test("Every number is greater than or equal to 2", () => {
    expect(/\.every/.test(isEveryNumGreaterThan2.toString())).toBe(true);
    expect(isEveryNumGreaterThan2(nums)).toBe(false);
  });

  test("Every word is shorter than 7 characters", () => {
    expect(/\.every/.test(isEveryWordShorterThan7.toString())).toBe(true);
    expect(isEveryWordShorterThan7(words)).toBe(true);
  });

  test("A new array with all values less than 5", () => {
    arrayLessThan5;
    expect(/\.filter/.test(arrayLessThan5.toString())).toBe(true);
    expect(arrayLessThan5(nums)).toStrictEqual([1, 2, 3, 4, 0]);
  });

  test("A new array with all words with odd lengths", () => {
    expect(/\.filter/.test(arrayOddLengthWords.toString())).toBe(true);
    expect(arrayOddLengthWords(words)).toStrictEqual([
      "The",
      "quick",
      "brown",
      "fox",
      "jumps",
      "the",
      "dog",
    ]);
  });

  test("Find first value that is divisible by 4", () => {
    expect(/\.find/.test(firstValDivisibleBy4.toString())).toBe(true);
    expect(firstValDivisibleBy4(nums)).toBe(4);
  });
  test("Find first word longer than 4 characters", () => {
    expect(/\.find/.test(firstWordLongerThan4Char.toString())).toBe(true);
    expect(firstWordLongerThan4Char(words)).toBe("quick");
  });

  test("Find the index of the first number that is divisible by 3", () => {
    expect(/\.findIndex/.test(firstNumIndexDivisibleBy3.toString())).toBe(true);
    expect(firstNumIndexDivisibleBy3(nums)).toBe(2);
  });

  test("Find the index of the first word that is less than 2 characters long", () => {
    expect(/\.findIndex/.test(firstWordIndexLessThan2Char.toString())).toBe(
      true
    );
    expect(firstWordIndexLessThan2Char(words)).toBe(-1);
  });

  test("Console log the values times 3", () => {
    expect(/\.forEach/.test(logValuesTimes3.toString(nums))).toBe(true);
    expect(logValuesTimes3(nums)).toBe(undefined);
  });

  test("Console log each word with an exclamation point", () => {
    expect(/\.forEach/.test(logWordsWithExclamation.toString(words))).toBe(
      true
    );
    expect(logWordsWithExclamation(words)).toBe(undefined);
  });

  test("A new array of values that are squared and then multiplied by their index number", () => {
    expect(/\.map/.test(arrayValuesSquaredTimesIndex.toString())).toBe(true);
    expect(arrayValuesSquaredTimesIndex(nums)).toStrictEqual([
      0, 4, 18, 48, 100, 180, 294, 448, 648, 900, 0,
    ]);
  });

  test("A new array of words that are all uppercase", () => {
    expect(/\.map/.test(arrayWordsUpcased.toString())).toBe(true);
    expect(arrayWordsUpcased(words)).toStrictEqual([
      "THE",
      "QUICK",
      "BROWN",
      "FOX",
      "JUMPS",
      "OVER",
      "THE",
      "LAZY",
      "DOG",
    ]);
  });

  test("Are some numbers divisible  by 7?", () => {
    expect(/\.some/.test(areSomeNumsDivisibleBy7.toString())).toBe(true);
    expect(areSomeNumsDivisibleBy7(nums)).toBe(true);
  });
  test("Do some words have an a?", () => {
    expect(/\.some/.test(doSomeWordsHaveAnA.toString())).toBe(true);
    expect(doSomeWordsHaveAnA(words)).toBe(true);
  });
});
