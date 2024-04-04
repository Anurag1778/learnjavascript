// const userEmail = "anurag@gmail.com";

// if (userEmail) {
//   console.log(`Got user email`);
// } else {
//   console.log(`Don't have user email`);
// }

// falsy values

// false, 0 , null ,undefined,BigInt 0n,"",NaN

// truthy
// true ,"0", 'false'," " ,[],{},function(){},

// if (userEmail.length===0) {
//     console.log(`array is empty`);
// }

// const emptyObj = {};

// if (Object.keys(emptyObj).length === 0) {
//   console.log(`object is empty`);
// }

// nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10;

// val1 = null ?? 10;
val1 = undefined ?? 10;
console.log(val1);
val1 = undefined ?? null;
console.log(val1);
val1 = null ?? undefined;

console.log(val1);

// terniary operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log(`less than 80`) : console.log(`more than 80`);
