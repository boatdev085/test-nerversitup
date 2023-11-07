const countSmileys = (arr) => {
  const regex = /[:;][-~]?[)D]/g;
  const checkSmileys = arr.filter((face) => face.match(regex));
  return checkSmileys.length;
};

console.log("case1", countSmileys([":)", ";(", ";}", ":-D"]));
console.log("case2", countSmileys([";D", ":-(", ":-)", ";~)"]));
console.log("case3", countSmileys([";]", ":[", ";*", ":$", ";-D"]));
