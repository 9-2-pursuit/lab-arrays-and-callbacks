const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  return nums.every((num) => num > 2);
};

const isEveryWordShorterThan7 = (words) => {
  return words.every((word) => word.length < 7);
};

// Filter

const arrayLessThan5 = (nums) => {
  return nums.filter((num) => num < 5);
};

const arrayOddLengthWords = (words) => {
  return words.filter((word) => word.length % 2);
};

// Find

const firstValDivisibleBy4 = (nums) => {
  return nums.find((num) => !(num % 4));
};

const firstWordLongerThan4Char = (words) => {
  return words.find((word) => word.length > 4);
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  return nums.findIndex((num) => !(num % 3));
};

const firstWordIndexLessThan2Char = (words) => {
  return words.findIndex((word) => word.length < 2);
};

// For Each

const logValuesTimes3 = (nums) => {
  nums.forEach((num) => console.log(num * 3));
};

const logWordsWithExclamation = (words) => {
  words.forEach((word) => console.log(word + "!"));
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  return nums.map((num, index) => num ** 2 * index);
};

const arrayWordsUpcased = (words) => {
  return words.map((word) => word.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some((num) => !(num % 7));
};

const doSomeWordsHaveAnA = (words) => {
  return words.some((word) => word.toLowerCase().includes("a"));
};

// Panagram challenge
const panagram = [
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

const isPanagram = (panagramParam) => {
  const alphabetCount = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };
  const panagramLettersArr = panagramParam.join("").toLowerCase().split("");

  for (const letter of panagramLettersArr) {
    alphabetCount[letter]++;
  }
  console.log(Object.values(alphabetCount).every((count) => count > 0));
};

// Products challenge
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

const filterCheaperThanTenAndSort = (productsParam) => {
  const filteredArr = productsParam.filter((product) => product.price < 10);
  return filteredArr.sort((a, b) => (a.name > b.name ? 1 : -1));
};

console.log(filterCheaperThanTenAndSort(products));

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
