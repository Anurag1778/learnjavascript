class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username:${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const anurag = new User("anuarg");
console.log(anurag.username);
// console.log(anurag.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("anurag", "anurag@gmail.com");
console.log(iphone.username);
console.log(iphone.createId);
