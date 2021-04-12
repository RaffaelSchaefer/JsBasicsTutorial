# JS BASICS TUTORIAL
A small website I made to learn more about js.  
To make this project I used this [Tutorial] from Youtube.
# Contents
## Variables
Variables contain int,strings,boolean....  
All variables are undefined in js.

    var oldMethod = "old used before ES6";   

New method: use let instead of var.

    let newMethod = "new method since ES6";   

### Rules for naming variables in js

1. Dont uses reserved keywords like let,var and new
2. Names should be understandable
3. Variables should not start with a number
4. Don't use spaces or hyphen to separate words use camel case instead

**Exsample**:

    let camelCaseDemoVariable = true;

Variables are case-sensitive.

     let demoValue = 0;    let DemoValue = 1;    
        if(demoValue !== DemoValue) {    
        console.log("Js is case sensitive");    
    }   

Multiple variables can be defined at once.

    let apple = "🍎", cherry = "🍒", kiwi = "🥝";    
    console.log(apple,cherry,kiwi);   

**Best practice:** Define multiple variables in multiple lines.

    let pumpkin = "🎃";    
    let pickle = "🥒";    
    let tomato = "🍅";    
    console.log(pumpkin,pickle,tomato);   

## Constants
Variables can be changed in the duration of the program.

    let demoVariable = 0.3;    
    demoVariable = 1;    
    console.log("demoVariable = "+demoVariable);   

A constant cannot be changed in the duration of the program.    
Constants stay the same after initialization

    const demoConstant = 0.3; //demoConstant cannot be reassigned
    console.log("demoConstant = "+demoConstant);   

**Best practice**: If a Variable should be reassigned use a constant, then use const instead of let in your code.

## Primitive types
In js there are two types of variables
1. Primitive types/Value Types
2. Reference types

Variations of Primitive types:
1. Strings
2. Numbers (Int, Float)
3. Boolean
4. undefined
5. null

**Exsample**:

    let string ='String'; //String Literal  
    let number = 30; //Number Literal  
    let bool = true; //Boolean Literal  
    let demoUndefined = undefined; //Undefined  
    let demoNull = null; //Null  

Null is used when a variable should be empty.

[Tutorial]: https://youtu.be/W6NZfCO5SIk
