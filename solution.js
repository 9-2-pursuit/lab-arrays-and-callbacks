const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  //
 return  nums.every(num=>num>2)
};

const isEveryWordShorterThan7 = (words) => {
  //
 return words.every(char=>char.length<7)
};

// Filter

const arrayLessThan5 = (num) => {
  //
  return nums.filter(num=>num<5)
};

const arrayOddLengthWords = (words) => {
  //
 return words.filter(word=>word.length%2===1)
};

// Find

const firstValDivisibleBy4 = (nums) => {
  //
 return nums.find(num=>num%4==0)
};

const firstWordLongerThan4Char = (words) => {
  //
 return words.find(word=>word.length>4)
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  //


const searchValue=nums.findIndex(num=>num%3===0)
 return searchValue
  
};

const firstWordIndexLessThan2Char = (words) => {
  //
  const searchValue=words.findIndex(word=>word.length<2)
  
  return searchValue
};

// For Each

const logValuesTimes3 = (nums) => {
  //
  // return nums.forEach(num=>console.log(num*3))
};

const logWordsWithExclamation = (words) => {
  //
  words.forEach(word=>{
    // console.log(word + " !")
  })
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  //
 return nums.map((num,idx)=>{
    return Math.pow(num,2)*idx
  })
};

const arrayWordsUpcased = (words) => {
  //
 return words.map(word=>word.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  //
  return nums.some(num=>num%7===0)
};

const doSomeWordsHaveAnA = (words) => {
  //
  return words.some(word=>word.includes("a","A"))
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
