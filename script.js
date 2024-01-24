// Creating variable using var keyword
// var x = 30;
// var x = "hello world";

// console.log("Hello World");

// Creating variable using let keyword
// let keyword in Javascript is used to declare a block-scoped variable.
// Mens that the variable is only visible within the block in which it is declared.
// let x = 10;

// if(x>5) {
//     let y = 20;
//     console.log(y);
// }
// console.log(y);

// Creating variable using const keyword
// The const keyword in Javascript is used to declare a contstant variable.
// This means that the variable cannot be reassigned to a new value.
// const a = 4;
// console.log(a);

// // Here we will not able to assign constant variable.
// a = 5;

// Scope in Javascript
// Scope in Javascript referes to the visibility of variables and functions
// within a program.
// In Javascript, there are three types of scope:
    // Global scope,
    // Function scope,
    // Block scope.

// Global scope
// The global scope is the outermost scope in a Javascript program.
// Variables and functions declared in the global scope are visible
// from anywhere in the program.
// var x = "Hello, Krishna"; //global varibale/scope

// function example() {
//     console.log(x);
// }

// example();

// console.log(x);

// Function scope
// Function scope is created when a function is declared. Variables and
// functions declared in a function's scope are only visible within that
// function.
// function example() {
//     var fs = "Hello, Techy";
//     console.log(fs);
// }

// example();
// console.log(fs); //Not able to access.

// Block scope
// Block scope in Javascript refers to the visibility of variables and
// function within a block of code.
// A block of code is a group of statement that are enclosed in curly braces({}).
// Variables and Functions declared in a block's scope are only visible within that block.

// function example() {
//     if(true){
//         let bv = "Inside function";
//         console.log(bv);    //accessing inside function
//     }
//     console.log(bv); // outside function (ERROR)
// }

// example();  //calling functions
// console.log(bv); // outside function (ERROR)

// Data types in Javascript
    // 1. Primitive: String, Number, Boolean, Null, Undefined, BigInt, Symbol
    // 2. Reference: Object, Array, Function

            // Primitive Data Types

// String Data types: In JS, a string is a sequence of zero or more characters.
// Starts with single quote(') or a double quote("). They are used for storing
// and manipulating Text.
// let firstname = "Krishna";
// let lastname = "Chaudhary";

// console.log(firstname, lastname);

// Numbers Data Types: Number represents integer and floating-point numbers.
// let num = 100;
// let num2 = 19.9;
// let num3 = 19.0; // Automatic conversion to integer to save memory.
// let num4 = '20';

// console.log(num, num2, num3, typeof num4);

// Boolean Data type: It is used to display TRUE and FALSE.
// let x = 20 > 10;
// console.log(x);

// let y = 20 < 10;
// console.log(y);

// undefined Data Type: If a variable is declared but the value is not
// assigned, then the value of that variable will be undefined. And the
// the data type is also undefined.
//  let age;
//  console.log(age);
//  console.log(typeof age);

//  let age2 = 30;
//  console.log(age2);
//  console.log(typeof age2);

//  Null Data Types: Empty or no values. JS defines null is equal to undefined.
// let num = null;
// console.log(num);

// console.log(null == undefined);

        // Reference Data Types
// In JS, an object is a collection of properties. Where each property
// is defined as a key-value pair.

// Object Data Type
// let person = {
//     firstname : 'Krishna',
//     lastname : 'Chaudhary',
//     age : 27
// };
// console.log(person);
// console.log(typeof person);

// Array Data Types: Arrays are a type of object that stored a collection
// of values.
// let number = [1, 2, 3, 4, 5];
// console.log(number);

// Function Data Types: Functions are a type of object that can be used
// to execute code.
// function msg() {
//     console.log("Hello From Krishna");
// }

// msg()
// console.log(typeof msg);

// JS is s dynamically typed language. So we can store different data-types
// in the same variable.

let x;
console.log(x);
console.log(typeof x);

x = "Krishna";
console.log(x);
console.log(typeof x);

x = 100;
console.log(x);
console.log(typeof x);

x = true;
console.log(x);
console.log(typeof x);




