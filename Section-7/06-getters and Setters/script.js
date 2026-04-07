// const person = {
//   firstName: "Jannatul",
//   lastName: "Ferdous",
//   fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
// };
// console.log(person.fullName());

//getters ==> access properties
// setters ==> change (mutated) them

const person = {
  firstName: "Jannatul",
  lastName: "Ferdous",
  fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
person.fullName = "Ashikur Rahman";
console.log(person);
