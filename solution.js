const { nums, words, products } = require("./data/data.js");

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

// Reduce

const sumArray = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

const concatenateWords = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, "");
};

// console.log(concatenateWords(words));

// Sort

const sortNumsAscending = (arr) => {
  return arr.sort((a, b) => a - b);
};

const sortNumsDescending = (arr) => {
  return arr.sort((a, b) => b - a);
};

const sortWordsAscending = (arr) => {
  return arr.sort((a, b) => {
    const wordA = a.toLowerCase();
    const wordB = b.toLowerCase();
    if (wordA < wordB) {
      return -1;
    } else if (wordA > wordB) {
      return 1;
    } else {
      return 0;
    }
  });
};

const sortWordsDescending = (arr) => {
  return arr.sort((a, b) => {
    const wordA = a.toLowerCase();
    const wordB = b.toLowerCase();
    if (wordA < wordB) {
      return 1;
    } else if (wordA > wordB) {
      return -1;
    } else {
      return 0;
    }
  });
};

// console.log(sortNumsAscending(nums));
// console.log(sortNumsDescending(nums));
// console.log(sortWordsAscending(words));
// console.log(sortWordsDescending(words));

// isPanagram

const isPanagram = (arr) => {
  const lettersArr = "abcdefghijklmnopqrstuvwxyz".split("");
  return lettersArr.every((letter) => {
    return arr.some((word) => word.includes(letter));
  });
};

// console.log(isPanagram(words));

// Working with Data

const productsWithPriceLessThanTen = (arr) => {
  return arr.filter((product) => product.price < 10);
};

const sortProductByName = (arr) => {
  return arr.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }

    if (a.name > b.name) {
      return 1;
    }

    return 0;
  });
};

console.log(productsWithPriceLessThanTen(products));
console.log(sortProductByName(products));

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
