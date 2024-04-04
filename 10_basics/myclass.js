// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encrypted() {
//     return `${this.password}anb`;
//   }

//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("Anurag", "anurag@gmail.com", "123");

// console.log(chai.encrypted());
// console.log(chai.changeUsername());
// behind scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encrypted = function () {
  return `${this.password}abc`;
};
User.prototype.changeUsername = function () {
  return `${this.username}`;
};

const coffe = new User("Anurag", "anurag@gmail.com", "123");

console.log(coffe.encrypted());
console.log(coffe.changeUsername());
