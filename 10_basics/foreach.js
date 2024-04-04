// const coding = ["js", "ruby", "java", "python", "cpp"];

// const value = coding.forEach((item) => {
//    console.log(item);
//   return item;
// });

// console.log(value);

// const myNums = [1, 2, 3, 4, 5, 6, 8];

// const newnums = myNums.filter((num) => num > 4);
// const newnums = myNums.filter((num) => {
//   return num > 4;
// });

// const newnums = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     newnums.push(num);
//   }
// });

// console.log(newnums);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newnums = myNumbers.map((num) => {
//   return num + 10;
// });

// console.log(newnums);

const newsNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
console.log(newsNums);
