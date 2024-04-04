// primitive

// 7 type : String, Number , Boolean,undefined,null,BigInt ,symbol

const score = "anurag";

const scoreValue = 25;

const isLoggined = false;

const outsideTemp = null;

let userEmail;

const id = Symbol("123");
const anotherid = Symbol("123");

console.log(id === anotherid);

const bigNumber = 1254585478585n;

// refernce (non-primitive)

// array ,object,function

const heros = ["anurag", "aayush", "faraz"];

let myObj = {
  name: "Anurag",
  Roll: 25,
  College: "IYC",
};

let myfunction = function () {
  console.log(2 + 5);
};

myfunction();

// **********************************************?

// stack (promitive ) you will get copy of your variable
let mytubeChannel = "codeWithAnurag";

let anothername = mytubeChannel;

anothername = "codeWithhary";

// console.log(mytubeChannel);
// console.log(anothername);

let userOne = {
  email: "anurag@gmail.com",
  phone: 9324458678,
  name: "Anurag",
};

let userTwo = userOne;

console.log(userOne.email);
console.log(userTwo.email);

userTwo.email = "hitesh@gmail.com";

// console.log(userOne.email);
// console.log(userOne.phone);
// console.log(userOne.name);
// Heap (non-primitive)
console.log(userOne.email);
console.log(userTwo.email);
