// function SayMyName() {
//   console.log("A");
//   console.log("N");
//   console.log("U");
//   console.log("R");
//   console.log("A");
//   console.log("G");
// }

// SayMyName;   reference
// SayMyName();   execution

// console.log(SayMyName());

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2) {
//      let result = number1 + number2;
//      return result;

//   return number1 + number2;
// }

// const result = addTwoNumbers(2, 4);

// console.log(result);

// function loginUserMessage(username = "aayush") {
//   if (!username) {
//     console.log("Please enter the username");
//     return;
//   } else return `${username} is just logged in!`;
//   if (username === undefined) {
//     console.log("Please enter the username");
//     return;
//   } else return `${username} is just logged in!`;
// }

// loginUserMessage("Anurag");
// console.log(loginUserMessage());
// console.log(loginUserMessage("Anurag"));

function calculateCartPrice(val1, val2, ...num1) {
  return num1; //spread operater also called rest operator  the name differ  where you are using it
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "hitesh",
  price: 999,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);

handleObject({
  username: "anurag",
  price: 599,
});

const myNewArray = [200, 300, 400, 500, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500, 600, 800, 900]));
