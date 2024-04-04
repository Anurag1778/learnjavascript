// singleton
//Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Anurag",
  [mySym]: "mykey1",
  surname: "Yadav",
  age: 18,
  location: "mumbai",
  email: "anurag@gmail.com",
  isLoggedIN: false,
  lasrLoginDays: ["Monday", "saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["surname"]);
// console.log(JsUser[mySym]);

// JsUser.email = "anu@gmail.com";

// Object.freeze(JsUser);
// JsUser.email = "anupriya@gmail.com";
// console.log(JsUser);

// JsUser.greeting = function () {
//   console.log(`Hello aap ka naam  ${JsUser.name}`);
//   console.log(`Hello aap ka naam  ${this.name}`);
// };
// JsUser.greetingTwo = function () {
//   console.log(`Hello aap ki age ${JsUser.age}`);
//   console.log(`Hello aap ki age ${this.age}`);
// };

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// const tinderUser = new Object();singelton object
// const tinderUser={}  non-singelton object

const tinderUser = {};

tinderUser.id = "12abc";
tinderUser.name = "anurag";
tinderUser.age = 20;
tinderUser.isLoggedIN = false;

// console.log(tinderUser);

const regularUser = {
  email: "hello@gmail.com",
  fullName: {
    userfullName: {
      firstName: "Anurag",
      lastName: "Yadav",
    },
  },
};

// console.log(regularUser.fullName.userfullName.firstName);

const object1 = { 1: "a", 2: "b" };
const object2 = { 3: "c", 4: "d" };
// const object3 = Object.assign(object1, object2);
// const object3 = Object.assign({}, object1, object2); //some time we also use in this way also it is good practice
// const object3 = { object1, object2 };

const object3 = { ...object1, ...object2 };
console.log(object3);

const users = [
  {
    name: "anurag",
    email: "anurag2426@gmail.com",
  },
  {
    name: "vishal",
    email: "vishal2426@gmail.com",
  },
  {
    name: "priya",
    email: "priya2426@gmail.com",
  },
  {
    name: "anurag",
    email: "anurag2426@gmail.com",
  },
  {
    name: "sunita",
    email: "sunita2426@gmail.com",
  },
];

// console.log(users[1].email);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIN"));

const course = {
  coursename: "javascript",
  price: 999,
  courseInstructor: "hitesh",
};

// const { courseInstructor, price, coursename } = course;
// you can use this react also  you can also destructure the code also
// console.log(courseInstructor);
// console.log(price);
// console.log(coursename);

const navbar = ({ company }) => {};

navbar((company = "anurag"));

//  {
//   name: "anurag",
//   surname: "yadav",
//   price: "free",
// }

[{}, {}, {}];
