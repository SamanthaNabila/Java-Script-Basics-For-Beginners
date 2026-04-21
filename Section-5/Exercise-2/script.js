//factory Function

// let address = creatAdd("a", "b", "c");
// console.log(address);
// function creatAdd(street, city, zipCode) {
//   return {
//     street,
//     city,
//     zipCode,
//   };
// }

//cpnstructor Function
let address = new Address("d", "e", "f");
console.log(address);
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
