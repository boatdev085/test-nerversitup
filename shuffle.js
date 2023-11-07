const shuffling = (input) => {
  const result = [];
  const convertForCheck = new Array(input.length).fill(false);

  const recursive = (current) => {
    if (current.length === input.length) {
      result.push(current);
      return;
    }

    for (let i = 0; i < input.length; i++) {
      if (
        convertForCheck[i] ||
        (i > 0 && input[i] === input[i - 1] && !convertForCheck[i - 1])
      ) {
        continue;
      }
      convertForCheck[i] = true;
      recursive(current + input[i]);
      convertForCheck[i] = false;
    }
  };

  const sortedInput = input.split("").sort().join("");
  recursive("");
  return result.filter((perm) => perm === sortedInput || perm !== input);
};

console.log("case1", shuffling("a"));
console.log("case2", shuffling("ab"));
console.log("case3", shuffling("abc"));
console.log("case4", shuffling("aabb"));
