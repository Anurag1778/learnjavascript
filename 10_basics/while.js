// let index = 0;
// while (index <= 20) {
//   console.log(`value of index is ${index}`);
//   index = index + 2;
// }

// let heros = ["Anurag", "riddhi", "priya", "sonam"];
// let arr = 0;
// while (arr < heros.length) {
//   console.log(`Value is ${heros[arr]}`);
//   arr++;
// }

// let score = 11;
// do {
//   console.log(`Score is ${score}`);
//   score++;
// } while (score <= 10);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const anu of arr) {
//   console.log(anu);
// }

// const greeting = "hello world";
// for (const greet of greeting) {
//   console.log(greet);
// }

// map
// It is manily use for unique value only
// const map = new Map();
// map.set("IN", "india");
// map.set("USD", "USA");
// map.set("FR", "France");
// map.set("FR", "France");

// console.log(map);

// for (const [key, value] of map) {
//   console.log(`${key} := ${value}`);
// }

// const myObject = {
//   js: "javascript",
//   cpp: "c++",
//   rb: "ruby",
//   swift: "swift by apple",
// };

// for (const key in myObject) {
//   console.log(key, ":=", myObject[key]);
// }

const programming = ["javascript", "java", "python", "cpp", "ruby"];

for (const key in programming) {
  //   console.log(programming[key]);
}

const map = new Map();
map.set("IN", "india");
map.set("USD", "USA");
map.set("FR", "France");
map.set("FR", "France");

for (const key in map) {
  console.log(key);
}

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach((element) => {
  console.log(element);
});
console.log("*********************************************************");
coding.forEach(function (val) {
  console.log(val);
});

function printMe(item) {
  console.log(item);
}

coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  console.log(index, item, arr);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "c++",
    languageFileName: "cpp",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

// myCoding.forEach((val) => {
//   console.log(val);
// });

// myCoding.forEach((val) => {
//   console.log(val.languageFileName);
// });
