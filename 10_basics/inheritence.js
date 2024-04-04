class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.password = password;
    this.email = email;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const tea = new Teacher("anurag", "anurag@gmail.com", "123");
tea.addCourse("javascript");
tea.logMe();
const chai = new User("aayush");

chai.logMe();

console.log(tea === chai);
console.log(tea instanceof Teacher);
console.log(tea instanceof User);
console.log(chai instanceof User);
console.log(chai instanceof Teacher);
