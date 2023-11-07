const findOdd = (arr) => {
  const counts = {};

  for (const num of arr) {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }

  for (const num in counts) {
    if (counts[num] % 2 !== 0) {
      return parseInt(num, 10);
    }
  }
};

console.log("case1", findOdd([7]));
console.log("case2", findOdd([0]));
console.log("case3", findOdd([1, 1, 2]));
console.log("case4", findOdd([0, 1, 0, 1, 0]));
console.log("case5", findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
