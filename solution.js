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

// Reduce

// - Add all the numbers in the array together using the `reduce` method
const addAllNums = (arr) => {
return arr.reduce((a, b) => a + b, 0)
}

// - concatenate all the words using reduce
const addAllWords = (arr) => {
  return arr.reduce((a, b) => a + b)
}

//Sort 

// - Try to sort without any arguments, do you get what you'd expect with the numbers array?
const noArgSortNums = (arr) => {
return arr.sort()
}

// - Try to sort without any arguments, do you get what you'd expect with the words array?
const noArgSortWords = (arr) => {
return arr.sort()
}

// - Sort the numbers in ascending order
const sortNumsAsc = (arr) => {
  return arr.sort((a, b) => a - b)
}

// - Sort the numbers in descending order
const sortNumsDesc = (arr) => {
  return arr.sort((a, b) => b - a)
}

// - Sort the words in ascending order
const sortWordsAsc = (arr) => {
  return arr.sort((a, b) => a - b)
}

// - Sort the words in descending order
const sortWordsDesc = (arr) => {
  return arr.sort((a, b) => b - a)
}

// - test whether each letter a-z (case insensitive) is used at least once
const eachLetterUsed = (arr) => {
    let regex = /([a-z])(?!.*\1)/g;
    return (arr.split(" ").match(regex) || []).length === 26;
}

// - filter for products with a price that is less than 10, using the array below:
const filterProd = (arr) => {
  return arr.filter(({price}) => price < 10)
}

// - sort alphabetically by product name
const sortProd = (arr) => {
  return arr.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1: 0)
}


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
