const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (arr) => {
  return arr.every((a) => a >= 2);
};

const isEveryWordShorterThan7 = (arr) => {
  return arr.every((a) => a.length < 7)
};

// Filter

const arrayLessThan5 = (arr) => {
  return arr.filter((a) => a < 5)
};

const arrayOddLengthWords = (arr) => {
  return arr.filter((a) => a.length % 2 == 1)
};

// Find

const firstValDivisibleBy4 = (arr) => {
  return arr.find((a) => a % 4 == 0)
};

const firstWordLongerThan4Char = (arr) => {
  return arr.find((a) => a.length > 4 )
};

// Find Index

const firstNumIndexDivisibleBy3 = (arr) => {
 return arr.findIndex((a) => a % 3 == 0)
};

const firstWordIndexLessThan2Char = (arr) => {
  return arr.findIndex((a) => a.length < 2)
};

// For Each

const logValuesTimes3 = (arr) => {
  return arr.forEach((a) => a * 3)
};

const logWordsWithExclamation = (arr) => {
  return arr.forEach((a) => a + "!")
};

// Map

const arrayValuesSquaredTimesIndex = (arr) => {
  return arr.map((a, index) => (a**2) * index )
};

const arrayWordsUpcased = (arr) => {
  return arr.map((a) => a.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = (arr) => {
  return arr.some((a) => a % 7 == 0)
};

const doSomeWordsHaveAnA = (arr) => {
  return arr.some((b) => b.includes("a"))
};

module.exports = {
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
};
