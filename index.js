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
//4. Dont use spaces or hyphen to separate words use camel case instead
let camelCaseDemoVariable = true;
// Variables are case-sensitive
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
//Best practice: If a Variable should be reassigned use a constant, then use const instead of let in your code
//PRIMITIVE TYPES
//In js there are two types of variables
//1. Primitive types/Value Types
//2. Reference types
//Variations of Primitive types
//1. Strings
//2. Numbers (Int, Float)
//3. Boolean
//4. undefined
//5. null
let string ='String'; //String Literal
let number = 30; //Number Literal
let bool = true; //Boolean Literal
let demoUndefined = undefined; //Undefined
let demoNull = null;//Null
//Null is used when a variable should be empty
//DYNAMIC TYPING
//In a static language a type of a variable can not be changed
//sting demoString = "John";
//In a dynamic language a type of a variable can be changed
let demoVar = "John";
console.log("demoVar is a "+typeof demoVar);
demoVar = 5;
console.log("demoVar is a "+typeof demoVar);
//You can use typeof to check the type of the variable
//REFERENCE TYPES
//Variations of Reference types
//1. Objects
//2. Arrays
//3. Functions
//OBJECTS
//A objects Variable with sub-values like a struct in c
let demoPerson = {
    demoName: "Dave",
    demoAge: 50
}; //{} are a Object Literal
console.log("His Name is "+demoPerson.demoName+" and he is "+demoPerson.demoAge+" years old!");
//to change a sub-value from a object you use:
demoPerson.demoAge = 30; //Dot notation
let userSelection = "demoName";
demoPerson[userSelection] = "Otto"; //Bracket notation
console.log("His Name is "+demoPerson.demoName+" and he is "+demoPerson.demoAge+" years old!");
//Best practice: Use the Dot notation when you can because its shorter and more clear to understand.
//Use the Bracket notation when you need to do a selection at Runtime
//ARRAYS
//Arrays are used to store values of a same kind in to one variable
let demoArray = [5,3,2,1]; //[] are a Array Literal
//every array has a index it always begins with a 0
let demoNames = ["Dave","Steve","Nils","Alex"];
console.log(demoNames[2]+" vs. "+demoNames[0]);
//The length and types of an array can change during runtime because js is a dynamic language
demoArrayMixed = ["Dave","Steve"];
demoArrayMixed[2] = 15000;
console.log(demoArrayMixed);
//A array is a object
let demoColors = ["green","red","blue"];
console.log("demoColor is a "+typeof  demoColors);
console.log("demoColor has a size of: "+demoColors.length);
//When you want to write a function in js you need to use the function keyword
function demoFunctionOne(amount) {
    for (i = 0;i <= amount;i++) {
        console.log("Hello World")
    }
}
demoFunctionOne(6);