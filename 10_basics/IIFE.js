// immediately Invoked function expression(IIFE)

// function chai() {
//   console.log(`DB CONNECTED`);
// }
// chai();

(function chai() {
  console.log(`DB CONNECTED`);
})();

//pollution in global scope

((name) => {
  console.log(`hello kaise hai aap log ${name}`);
})("Anurag yadav");
