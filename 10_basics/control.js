// if (1 === "1") {
//   console.log("executed");
// } else {
//   console.log("not executed");
// }

// if (2 != 4) {
//   console.log("executed");
// } else {
//   console.log("not executed");
// }
// const temperature = 43;
// if (temperature <= 40) {
//   console.log("executed");
// } else {
//   console.log("not executed");
// }

// const score = 400;

// if (score > 200) {
//   let power = "fly";
//   console.log(`User power ${power}`);
// }

// console.log(`User power ${power}`);

// const balance = 1000;

// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//   console.log("less than");
// } else if (balance < 750) {
//   console.log("less then 750");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIN = true;
const debitCard = true;
const loggedInFromEmail = true;
const loggedInFromGoogle = false;

if (userLoggedIN && debitCard && 2 == 2) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log(`User logged in`);
}
