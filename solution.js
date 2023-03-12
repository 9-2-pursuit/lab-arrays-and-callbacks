const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  return nums.every(num => num > 2 ? true : false);
};

const isEveryWordShorterThan7 = () => {
  return words.every(word => word.length < 7 ? true : false);
};

// Filter

const arrayLessThan5 = () => {
  return nums.filter(num => num < 5);
};

const arrayOddLengthWords = () => {
  return words.filter(word => word.length % 2 !== 0);
};

// Find

const firstValDivisibleBy4 = () => {
  return nums.find(num => num % 4 === 0);
};

const firstWordLongerThan4Char = () => {
  return words.find(word => word.length > 4);
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  return nums.findIndex(num => num % 3 === 0);
};

const firstWordIndexLessThan2Char = () => {
  return words.findIndex(word => word.length < 2);
};

// For Each

const logValuesTimes3 = () => {
  return nums.forEach(num => {
    console.log(num)
    console.log(num)
    console.log(num)
  })
};

const logWordsWithExclamation = () => {
  return words.forEach(word => word = `${word}!`);
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  return nums.map((num, i) => (num**2)*i);
};

const arrayWordsUpcased = () => {
  return words.map(word => word.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  return nums.some(num => num % 7 === 0);
};

const doSomeWordsHaveAnA = () => {
  return words.some(word => word.includes("a"));
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
