// array methods

myArr = [1, 2, 3, 4, 5, 6];

myArr.push(56);
myArr.pop();
// console.log(myArr);

myArr.unshift(9); //it will insert the value at the starting of the array and all the next value also shift it is danger time consuming
myArr.shift(); //it will remove the value at the starting of the array and all the next value also shift it is danger time consuming

// console.log(myArr);

const marvel = ["thor", "Ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];

// marvel.push(dc);
// console.log(marvel[3][2]);

// const allhero = marvel.concat(dc);
// console.log(allhero);

// const allhero = [...marvel, ...dc];
// console.log(allhero);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const real_another_array = another_array.flat(3);
// const real_another_array1 = another_array.flat(Infinity);
// console.log(real_another_array);
// console.log(real_another_array1);

console.log(Array.isArray("Anurag"));
console.log(Array.from("Anurag"));
// console.log(Array.from({ name: "Anurag" }));  interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

const newArr = myArr.join();
console.log(myArr);
console.log(typeof newArr);
console.log(newArr);

// slice ans splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
