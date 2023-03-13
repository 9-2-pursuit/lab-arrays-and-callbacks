const { nums, words } = require("./data/data.js");


// const greaterOrEqual = function (number) {
//   number >= 2;
//   return number;
// };

// console.log(nums.every(greaterOrEqual));

// Every
const isEveryNumGreaterThan2 = (nums) => {
  
  return nums.every(element=> element >= 2);
};

const isEveryWordShorterThan7 = (words) => {
  const finalOperation = words.every(element => element.length < 7)
  return finalOperation;
};

// Filter

const arrayLessThan5 = (nums) => {
  return nums.filter(number => number < 5)
  //
};

const arrayOddLengthWords = (words) => {
  const finalOperation2 = words.filter(word => ((word.length % 2) !== 0 ))
  //we know that odd numbers just could be divided by themselves 

  return finalOperation2;
};

// Find

const firstValDivisibleBy4 = (nums) => {
  return nums.find(number => (number % 4) === 0)
};

const firstWordLongerThan4Char = (word) => {
  const finalOperation3 = words.find(word => word.length > 4)

 return finalOperation3;
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  const finder1 = nums.findIndex(number => (number % 3) === 0);
  return finder1;
  
};

const firstWordIndexLessThan2Char = (word) => {
  const finder2 = words.findIndex(word => word.length < 2)
  return finder2;
  //
};

// For Each

const logValuesTimes3 = (nums) => {
  return nums.forEach(num => console.log(num * 3))
  //
};

const logWordsWithExclamation = () => {
  return words.forEach(word => console.log(word[word.length - 1].includes("!")));
  //
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {

  const operation = nums.map(number => nums.indexOf(number) * (number ** 2))
  return operation
  //
};

const arrayWordsUpcased = (words) => {
  return words.map(word => word.toUpperCase() )
  //
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some(number=> (number % 7) === 0)
  //
};

const doSomeWordsHaveAnA = (words) => {
  const operation = words.some (word => word.includes("a"))
  return operation;
  //
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
