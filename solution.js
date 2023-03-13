const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (arr) => {
  return arr.every(el => el >= 2);
};

const isEveryWordShorterThan7 = (arr) => {
  return arr.every(el => el.length < 7);
};

// Filter

const arrayLessThan5 = (arr) => {
return arr.filter(el => el < 5)
};

const arrayOddLengthWords = (arr) => {
return arr.filter(el => el.length % 2 === 1)
};

// Find

const firstValDivisibleBy4 = (arr) => {
return arr.find(el => el % 4 === 0)
};

const firstWordLongerThan4Char = (arr) => {
return arr.find(el => el.length > 4)
};

// Find Index

const firstNumIndexDivisibleBy3 = (arr) => {
return arr.findIndex(el => el % 3 === 0)
};

const firstWordIndexLessThan2Char = (arr) => {
return arr.findIndex(el => el.length < 2)
};

// For Each

const logValuesTimes3 = (arr) => {
console.log(arr.forEach(el => el * 3))
};

const logWordsWithExclamation = (arr) => {
console.log(arr.forEach(el => el + "!"))
};

// Map

const arrayValuesSquaredTimesIndex = (arr) => {
return arr.map((el, i) => Math.pow(el, 2) * i)
};

const arrayWordsUpcased = (arr) => {
return arr.map(el => el.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = (arr) => {
return arr.some(el => el % 7 === 0)
};

const doSomeWordsHaveAnA = (arr) => {
return arr.some(el => el.includes("a"))
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
