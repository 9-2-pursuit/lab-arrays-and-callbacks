const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (arr) => {
  return arr.every((num) => num > 2);
};

const isEveryWordShorterThan7 = (arr) => {
  return arr.every((word) => word.length < 7);
};

// Filter

const arrayLessThan5 = (arr) => {
  return arr.filter((num) => num < 5);
};

const arrayOddLengthWords = (arr) => {
  return arr.filter((word) => word.length % 2);
};

// Find

const firstValDivisibleBy4 = (arr) => {
  return arr.find((val) => val % 4 === 0);
};

const firstWordLongerThan4Char = (arr) => {
  return arr.find((word) => word.length > 4);
};

// Find Index

const firstNumIndexDivisibleBy3 = (arr) => {
  return arr.findIndex((num) => num % 3 === 0);
};

const firstWordIndexLessThan2Char = (arr) => {
  return arr.findIndex((word) => word.length < 2);
};

// For Each

const logValuesTimes3 = (arr) => {
  arr.forEach((val) => {
    console.log(val * 3);
  });
};

const logWordsWithExclamation = (arr) => {
  arr.forEach((word) => console.log(word + "!"));
};

// Map

const arrayValuesSquaredTimesIndex = (arr) => {
  return arr.map((val, i) => val ** 2 * i);
};

const arrayWordsUpcased = (arr) => {
  return arr.map((word) => word.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = (arr) => {
  return arr.some((val) => val % 7 === 0);
};

const doSomeWordsHaveAnA = (arr) => {
  return arr.some((word) => word.includes("a"));
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
