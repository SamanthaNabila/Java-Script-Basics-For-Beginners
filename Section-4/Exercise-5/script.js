const array = "";
console.log(countTruthy(array));

function countTruthy(array) {
  if (array) {
    console.log(array[0]);
    return;
  }
  console.log("false calur");
}
