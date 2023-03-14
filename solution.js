const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (arr) => {
  return arr.every((a) => a >= 2);
};

const isEveryWordShorterThan7 = (arr) => {
  return arr.every((a) => a.length < 7);
};

// Filter

const arrayLessThan5 = (arr) => {
  return arr.filter((a) => a < 5);
};

const arrayOddLengthWords = (arr) => {
  return arr.filter((a) => a.length % 2 == 1);
};

// Find

const firstValDivisibleBy4 = (arr) => {
  return arr.find((a) => a % 4 == 0);
};

const firstWordLongerThan4Char = (arr) => {
  return arr.find((a) => a.length > 4);
};

// Find Index

const firstNumIndexDivisibleBy3 = (arr) => {
  return arr.findIndex((a) => a % 3 == 0);
};

const firstWordIndexLessThan2Char = (arr) => {
  return arr.findIndex((a) => a.length < 2);
};

// For Each

const logValuesTimes3 = (arr) => {
  return arr.forEach((a) => a * 3);
};

const logWordsWithExclamation = (arr) => {
  return arr.forEach((a) => a + "!");
};

// Map

const arrayValuesSquaredTimesIndex = (arr) => {
  return arr.map((a, index) => a ** 2 * index);
};

const arrayWordsUpcased = (arr) => {
  return arr.map((a) => a.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = (arr) => {
  return arr.some((a) => a % 7 == 0);
};

const doSomeWordsHaveAnA = (arr) => {
  return arr.some((b) => b.includes("a"));
};

//Reduce
const hungryForMore = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
};

const hungryForMoreTwo = (arr) => {
  return arr.reduce((a, b) => a + b);
};

//Sort
const noArgSort = () => {
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

  return num.sort();
};

const noArgSortWord = () => {
  let words = [
    "The",
    "quick",
    "brown",
    "fox",
    "jumps",
    "over",
    "the",
    "lazy",
    "dog",
  ];

  return words.sort();
};

const numAsc = (num) => {
  return num.sort((a, b) => a - b);
};

const numDesc = (num) => {
  return num.sort((a, b) => b - a);
};

const wordsAsc = (words) => {
  return words.sort((a, b) => a - b);
};

const wordsDesc = (words) => {
  return words.sort((a, b) => b - a);
};

const isPanagram = (words) => {
  let regex = /([a-z])(?!.*\1)/g;
  return (words.join(" ").match(regex) || []).length === 26;
};

const filterProducts = () => {
  const products = [
    {
      name: "fairy lights",
      price: 5.99,
      description: "festive holiday decoration",
    },
    {
      name: "banana",
      price: 0.99,
      description: "full of potassium",
    },
    {
      name: "egg separator",
      price: 3.99,
      description: "it separates yolks from whites",
    },
    {
      name: "flag",
      price: 5.99,
      description: "catches the breeze",
    },
    {
      name: "quark",
      price: 0.01,
      description: "Very small",
    },
    {
      name: "turtleneck",
      price: 19.99,
      description: "available in black and slightly-darker black",
    },
    {
      name: "mitt (leather)",
      price: 15,
      description: "regulation sized",
    },
    {
      name: "nothing",
      price: 10,
      description: "Hey, if you pay us, we won't ask any questions.",
    },
    {
      name: "violin",
      price: 2000,
      description: "Talk about a JS fiddle...",
    },
    {
      name: "yoyo",
      price: 1,
      description: "We had to pull some strings to get this one in.",
    },
  ];

  return products.filter((p) => p.price < 10)

 
};

const dataSort = (arr) => {
  
  return arr.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1: 0)
}

module.exports = {
  dataSort,
  filterProducts,
  isPanagram,
  wordsDesc,
  wordsAsc,
  numDesc,
  numAsc,
  noArgSortWord,
  noArgSort,
  hungryForMoreTwo,
  hungryForMore,
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
