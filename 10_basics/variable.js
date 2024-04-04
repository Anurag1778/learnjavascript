console.log("Anurag yadav")

const accountId=12425
let accountEmail="anurag@gmail.com"
var accountPassword='1234'
accountCity="mumbai"
let accountState;


// accountId=2  you can not do this 

// {
//scope 
// }


/*
prefer not to use var 
because of issue of  block and function scope 
*/


accountEmail="anu@gmail.com"
accountPassword="2525252"
accoundCity="UP"

console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
