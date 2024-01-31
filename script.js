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

// let x;
// console.log(x);
// console.log(typeof x);

// x = "Krishna";
// console.log(x);
// console.log(typeof x);

// x = 100;
// console.log(x);
// console.log(typeof x);

// x = true;
// console.log(x);
// console.log(typeof x);

            // Operators in Javascript
// Operators in JS are symbols that are used to perform operations on operands.

//10 + 20; //+ is operator here and 10 & 20 are operand.

                // Types of Operators
                    // 1. Arithmetic Operators
                    // 2. Assignment Operators
                    // 3. Increment / Decrement Operators
                    // 4. Comparison Operators
                    // 5. Logical Operators
                    // 6. String Operators

// 1. Arithmetic operators: are used to perform mathematica operators on operands.
// Addition
// let sum = 5 + 2;
// console.log("Additon is " + sum);

// // Subtraction
// sum = 5 - 2;
// console.log("Subtraction is " + sum);

// // Multiplication
// sum = 5 * 2;
// console.log("Multiplication is " + sum);

// // Division
// sum = 5 / 2;
// console.log("Division is " + sum);

// // Modulus
// sum = 5 % 2;
// console.log("Modulus is " + sum);

// // Exponentiation
// sum = 5 ** 2;
// console.log("Modulus is " + sum);

// 2. Assignment Operators: are used to assign values to variables.
// let x = 5;
// x += 3; // Addition assignment
// console.log(x);

// let y = 5;
// y -= 3; // Subtration assignment
// console.log(y);

// let z = 5;
// z *= 3; // Multiplication assignment
// console.log(z);

// let a = 5;
// x /= 3; // Division assignment
// console.log(x);

// let b = 5;
// x **= 3; // Exponentiation assignment
// console.log(b);

// 3. Increment / Decrement Operators: The incremnet and decrement
// operators are used to increase or decrease the value of a variable
// by 1. The increment operator is ++ and decrement is --.
// They can be used in two ways Prefix and Postfix.

// let a = 10;
// console.log("Prefix increment");
// console.log(++a); //Prefix increment
// console.log(a);

// let b = 10;
// console.log("Prefix decrement");
// console.log(--b); //Prefix decrement
// console.log(b);
// // Tn the above prefixfix example operator is placed before the variable, and the
// // value of the variable is used after it is incremented.

// let c = 10;
// console.log("Postfix increment");
// console.log(c++); //Postfix increment
// console.log(c);

// let d = 10;
// console.log("Postfix decrement");
// console.log(d--); //Postfix decrement
// console.log(d);
// Tn the above postfix example operator is placed after the variable, and the
// value of the variable is used before it is incremented.

// 4. Comparison Operators: are used to compare two values and give back
// a boolean values: either true or false. Comparison operators are useful
// in decision-making and loop programs in JavaScript

    // < (less then)\
    // > (greater then)
    // <= (less then equall to)
    // >= (greater then equall to)
    // == (Equal checks)
    // != (inequality) (not equal) (flipped value of equal checks)
    // === (strict equality checks) (checks the Data type)
    // !== (strict inequality) (!==) (flipped value strict equality checks)

// let a = 10;
// let b = 20;

// console.log(a < b);
// console.log(a > b);
// console.log(a <= b);
// console.log(a >= b);

// console.log(a == b);
// console.log(a != b);

// console.log(a === b); // checks datatype and value both
// console.log(a !== b); // checks datatype and value both

// 5. Logical Operators: performs logical operations like:-
    // Logical AND (&&),
    // Logical OR (||),
    // Logical NOT (!)

// Logical AND (&&): Evaluates operands and returns true only if all are true.
    // true && true; // true
    // true && false; // false
    // false && true; // false
    // false && false; // false

// let x = 5;
// let y = 10;

// console.log(x > 0 && y > 0);
// console.log(x > 0 && y < 0);
// console.log(x < 0 && y > 0);
// console.log(x < 0 && y < 0);

// Logical OR (||): retuns true even if one of the multiple operands is true.
// true || true; // true
// true || false; // true
// false || true; // true
// false || false; // false

// let x = 5;
// let y = 10;

// console.log(x > 0 || y > 0);
// console.log(x > 0 || y < 0);
// console.log(x < 0 || y > 0);
// console.log(x < 0 || y < 0);

// Logical NOT (!): Converts operator to boolean and returns flipped value.

// let yes = true;
// let no = false;

// console.log(!yes);
// console.log(!no);

// 6. String Operators: In JS, you can also use the + operator to
// concatenate (join) two or more strings.

// console.log("Hello " + "World");

// let a = 'Krishna ';

// a += 'Chaudhary';

// console.log(a);

            // Operator Precedence in Javascript
// Operator Precedence: in JS determines the order in which operators are
// prased concerning each other.

// let result = (2 + 3) * 4;
// console.log(result);

            // Operator Associativity
// Operator associativity in JS defines the order in which operators of the
// same precedence are evaluated.

    // Types of Associativity:
        // 1. Left-to-right
        // 2. Right-to-left

// 1. Left-to-right
// let result = 4 - 2 - 1;
// console.log(result);

// 2. Right-to-left
// let result = 2 ** 3 ** 2;
// console.log(result);

        // Control flow statement
// Control flow statements are used to control the flow of execution
// in a JavaScript program. They are used to make decisions, execute loops,
// and handle errors.
// There are three types of control flow statements in JS:
        // 1. Conditional statements
        // 2. Loops
        // 3. Try/Catch statments

// 1. Conditional statements: are used to execute different actions based
// on different conditions.
    // If statement
    // else statement
    // else if statement

        // If statement   
// let age = 20;

// if (age > 18) {
//     console.log('you are adult.');
// }

        // else statement
// let age = 16;

// if (age > 18) {
//     console.log('you are adult.');
// }
// else {
//     console.log('you are not adult.');
// }

        // else if statement
// let age = 16;

// if (age > 18) {
//     console.log('you are adult.');
// }
// else if (age >= 16) {
//     console.log('You are teenager.');
// }
// else {
//     console.log('you are minor.');
// }

    // Switch Case: The switch statement in JS is a conditinal statement
    // that is used to execute a block of code based on the value of
    // expression.

    // let value = 42;
    // switch (typeof value) {
    //     case "number":
    //         console.log("Number");
    //         break;
    //     case "string":
    //         console.log("string");
    //         break;    
    // case "number":
    //         console.log("Number");
    //         break;
    // case "boolean":
    //         console.log("boolean");
    //         break;
    //     default:
    //         console.log("Other");
    //         break;
    // }

    let dayname = 2;
    switch (dayname) {
        case 1:
            dayname = 'Sunday';
            break;
    
        case 2:
            dayname = 'Monday';
            break;
        
        case 3:
            dayname = 'Tuesday';
            break;
            
        case 4:
            dayname = 'Thursday';
            break;
            
        case 5:
            dayname = 'Friday';
            break;
            
        case 6:
            dayname = 'Saturday';
            break;
         
        default:
            console.log("Invalid");
            break;
    }

    console.log("This day is: " + dayname);

// Ternary Operator
    // condition ? value_if_true : value_if_false

let age = 20;
let msg = (age >= 18) ? "You are adult" : "You are minor";
console.log(msg);




