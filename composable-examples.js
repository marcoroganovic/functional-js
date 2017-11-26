const { 
  Box, BoxList, Left, Right, 
  nullable, compose, pipe 
} = require("./composable");

const val = Box("Addy")
  .map(str => str.toUpperCase())
  .map(str => str.split(""))
  .map(arr => arr.reverse())
  .map(arr => arr.join(""))
  .fold(str => str);

console.log(val);

const res = BoxList([1, 2, 3])
  .map(val => val * 2)
  .filter(val => val > 2)
  .reduce((total, curr) => total + curr)
  .fold(val => val);

console.log(res);
