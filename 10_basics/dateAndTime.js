let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 25);
// let myCreatedDate = new Date(2024, 0, 25, 5, 6);
// let myCreatedDate = new Date("2024-01-14");
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMilliseconds());
// console.log(newDate.getMonth() + 1); it start from 0 so add 1
