// {
// } //scope
// var c = 300;
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  //   var c = 30; //avoid declaring var in you project or code
}

// console.log(a);
// console.log(b);
// console.log(a);
// console.log(b);

function one() {
  const username = "anurag";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);
  two();
}

one();
