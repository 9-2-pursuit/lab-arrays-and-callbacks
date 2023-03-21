const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  return nums.every((num) => {
    return num > 2;
  });
};

const isEveryWordShorterThan7 = () => {
  return words.every((word) => {
    return word.length < 7;
  });
};

// Filter

const arrayLessThan5 = () => {
  return nums.filter((num) => {
    return num < 5;
  });
};

const arrayOddLengthWords = () => {
  return words.filter((word) => {
    return word.length % 2 !== 0;
  });
};

// Find

const firstValDivisibleBy4 = () => {
  return nums.find((num) => {
    return num % 4 === 0;
  });
};

const firstWordLongerThan4Char = () => {
  return words.find((word) => {
    return word.length > 4;
  });
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  return nums.findIndex((num) => {
    return num % 3 === 0;
  });
};

const firstWordIndexLessThan2Char = () => {
  return words.findIndex((word) => {
    return word.length < 2;
  });
};

// For Each

const logValuesTimes3 = () => {

  nums.forEach((num) => {
    console.log(num * 3);
  });
};

const logWordsWithExclamation = () => {
  words.forEach((word) => {
    console.log(word + "!");
  });
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  return nums.map((num, index) => {
    return num * num * index;
  });
};

const arrayWordsUpcased = () => {
  return words.map((word) => {
    return word.toUpperCase();
  });
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  return nums.some((num) => {
    return num % 7 === 0;
  });
};

const doSomeWordsHaveAnA = () => {
  return words.some((word) => {
    return word.includes("a");
  });
};

const addAllTheNumbers = () => {
  return nums.reduce((acc, num) => {
    return acc + num;
  });
};

const addAllTheWords = () => {
  return words.reduce((acc, word) => {
    return acc + word;
  });
};

const sortAllTheNumbers = () => {
  return nums.sort((a, b) => {
    return a - b;
  });
};

const sortAllTheWords = () => {
  return words.sort((a, b) => {
    return a.length - b.length;
  });
};

const sortAllAccending = () => {
  return nums.sort((a, b) => {
    return a - b;
  });
};

const sortAllDecending = () => {
  return nums.sort((a, b) => {
    return b - a;
  });
};

const sortAllWordsAccending = () => {
  return words.sort((a, b) => {
    return a.length - b.length;
  });
};

const sortAllWordsDecending = () => {
  return words.sort((a, b) => {
    return b.length - a.length;
  });
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
