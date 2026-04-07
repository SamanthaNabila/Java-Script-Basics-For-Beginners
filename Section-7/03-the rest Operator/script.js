//when we pass varing number of arguments and the  rest operator will take all of them and put them in an array
function sum(...args) {
  return args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4, 5, 10));
