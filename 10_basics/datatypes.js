"Use strict" //treat all js code as newer version

// alert(3+3)  we ae using nodjs , not browser

//  number=> 2 to power 53
// BigIntstring=>""
// boolean=>true/false
// null=>stabdalone value
// undefined
// symbol=>unique


// null is object

// console.log(typeof "Anurag");
// console.log(typeof null);
// console.log(typeof undefined);
// console.table([ typeof "Anurag" , null , undefined, 76877 ])


// premitive
// call by value



// 7 types:
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt
const id=Symbol("123")
const anotherId=Symbol("123")

console.log(id==anotherId);

const bigNumber=9324458678n



// reference(non primitive)

// array
// Object
// function

const heros=["Anurag","anand","vishal"];


let employee={
    name:"Anurag",
    age:12,
}
console.log(typeof employee);
console.log(typeof heros);


const myfunction=function(){
    console.log("Anurag yadav");
}
console.log(typeof myfunction);






