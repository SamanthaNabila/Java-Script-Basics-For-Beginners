function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));

//to return all arguments
function sum(a, b) {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 10));
