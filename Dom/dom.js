// ================================================================
// DOM TEST WITH NODE.JS
// ================================================================

// IMPORTANT:
//
// Node.js does NOT have the browser DOM by default.
//
// Therefore:
//
// document
// window
// querySelector()
// getElementById()
//
// will NOT work directly in Node.js.
//
// This file is only for testing the JavaScript concepts
// that we learned around DOM-related programming.
//
// Run this file with:
//
// node dom.js


// ================================================================
// 1. NORMAL JAVASCRIPT WORKS IN NODE.JS
// ================================================================

const name = "Rojan";

console.log(name);


// ================================================================
// 2. FUNCTIONS WORK IN NODE.JS
// ================================================================

function greet(username) {
    return `Hello ${username}`;
}

console.log(greet("Rojan"));


// ================================================================
// 3. ARRAYS WORK IN NODE.JS
// ================================================================

const students = ["Rojan", "Ram", "Hari"];

console.log(students);


// ================================================================
// 4. OBJECTS WORK IN NODE.JS
// ================================================================

const user = {
    name: "Rojan",
    age: 20
};

console.log(user);


// ================================================================
// 5. CHECKING FOR DOM
// ================================================================

// typeof document tells us whether the document object exists.
//
// In normal Node.js:
//
// document → undefined

console.log(typeof document);


// ================================================================
// 6. IMPORTANT
// ================================================================

// If the output is:
//
// undefined
//
// That means Node.js does not have the browser DOM.
//
// This is normal.
//
// DOM code such as:
//
// document.querySelector()
// document.getElementById()
//
// must normally run inside a browser.


// ================================================================
// 7. SIMPLE DOM-LIKE PRACTICE
// ================================================================

// We can still practice selecting data using
// normal JavaScript arrays and objects.

const users = [
    {
        name: "Rojan",
        age: 20
    },
    {
        name: "Ronaldo",
        age: 40
    }
];

console.log(users[0].name);
console.log(users[1].name);


// ================================================================
// FINAL TEST
// ================================================================

console.log("Node.js JavaScript test completed!");