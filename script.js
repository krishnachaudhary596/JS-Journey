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
function example() {
    if(true){
        let bv = "Inside function";
        console.log(bv);    //accessing inside function
    }
    console.log(bv); // outside function (ERROR)
}

example();  //calling functions
console.log(bv); // outside function (ERROR)








