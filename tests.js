const { equal, notEqual, deepEqual } = require("assert");
const { map, filter, reduce } = require("./methods");

const IMMUTABLE_MESSAGE = "It should return new array instead of modifying original one";
const EMPTY_ARRAY_MESSAGE = "It should return empty array if empty array is provided as argument";

notEqual(
  map([1, 2, 3], val => val * 2),
  [2, 4, 6],
  IMMUTABLE_MESSAGE
);

deepEqual(
  map([1, 2, 3], val => val * 2), 
  [2, 4, 6],
  "It should properly multiply every value in array"
);


deepEqual(
  map([], val => val * 2),
  [],
  EMPTY_ARRAY_MESSAGE
);


notEqual(
  filter([1, 2, 3], val => val > 1),
  [2, 3],
  IMMUTABLE_MESSAGE
);

deepEqual(
  filter([1, 2, 3], val => val > 2),
  [3],
  "It should properly exclude values which evaluate to false"
);


deepEqual(
  filter([], val => val === "text"),
  [],
  EMPTY_ARRAY_MESSAGE
);

equal(
  reduce([1, 2, 3], (total, curr) => {
    return total + curr;
  }),
  6,
  "It should correctly set initial value as first element of array based on type"
);


equal(
  reduce([1, 2, 3], (total, curr) => {
    return total + curr;
  }, ""),
  "123"
);
