//VARIABLES
//Variables contain int,strings,boolean...
//All variables are undefined in js
var oldMethod = "old used before ES6";
//New method let instead of var
let newMethod = "new method since ES6";
//Rules for naming variables in js
//1. Dont uses reserved keywords like let,var and new
//2. Names should be understandable
//3. Variables should not start with a number
//4. Dont uses spaces or hyphen to separate words use camel case instead
let camelCaseDemoVariable = true;
// Variables are case sensitive
let demoValue = 0
let DemoValue = 1
if(demoValue !== DemoValue) {
    console.log("Js is case sensitive")
}
//Multiple variables can be defined at once
let apple = "🍎", cherry = "🍒", kiwi = "🥝";
console.log(apple,cherry,kiwi);
//Best practice: Define multiple variables in multiple lines
let pumpkin = "🎃";
let pickle = "🥒";
let tomato = "🍅";
console.log(pumpkin,pickle,tomato);
//CONSTANT
//Variables can be changed in the duration of the program
let demoVariable = 0.3;
demoVariable = 1;
console.log("demoVariable = "+demoVariable);
//A constant cannot be changed in the duration of the program.
//Constants stay the same after initialization
const demoConstant = 0.3; //demoConstant cannot be reassigned
console.log("demoConstant = "+demoConstant);
//Best practice: If a Variable should be reassigned use a constant
//Then use const instead of let
//PRIMITIVE TYPES