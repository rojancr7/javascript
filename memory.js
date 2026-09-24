/* ********************************************************************************* */
// Stack (Primitive),
//  Heap Memory (Non-Primitive)

// Stack mean one by one. e.g box = box1 box2, box3, box4,............


let myName = "Rojan Bhattarai";
let anotherName = myName;
anotherName = "Ronaldo";
console.log(myName);
console.log(anotherName);


// heap meory change the original value that in refrence 
let user = {
    name: "rojan",
    email: "wefdsaihb@gmail.com",
    id: "1234A"
}
let user1 = user;

user1.email = "qwerty@gmail.com"

console.log(user);
console.log(user1);

// # JavaScript: Stack & Heap Memory

// Understanding **Stack** and **Heap** helps explain why changing one variable sometimes affects another variable — and sometimes doesn't.

// ---

// ## 1. Two important memory concepts

// JavaScript values are commonly explained using two memory areas:

// * **Stack** → commonly associated with primitive values and direct variable bindings
// * **Heap** → commonly associated with objects and other reference-type values

// > **Important:** This is a useful mental model for learning JavaScript. The ECMAScript specification does not require JavaScript engines to implement memory exactly this way.

// ---

// # 2. Primitive Values → Think "Value is copied"

// Examples of primitive values:

// ```javascript
// let name = "Rojan";
// let age = 20;
// let isStudent = true;
// ```

// Other primitive types include:

// ```javascript
// string
// number
// boolean
// undefined
// null
// bigint
// symbol
// ```

// When you assign one primitive variable to another, the **value is copied**.

// ### Example

// ```javascript
// let myName = "Rojan Bhattarai";

// let anotherName = myName;

// anotherName = "Ronaldo";

// console.log(myName);
// console.log(anotherName);
// ```

// ### Output

// ```text
// Rojan Bhattarai
// Ronaldo
// ```

// ### Why?

// First:

// ```javascript
// let myName = "Rojan Bhattarai";
// ```

// Think of it like:

// ```text
// myName → "Rojan Bhattarai"
// ```

// Then:

// ```javascript
// let anotherName = myName;
// ```

// The value is copied:

// ```text
// myName       → "Rojan Bhattarai"
// anotherName  → "Rojan Bhattarai"
// ```

// Now:

// ```javascript
// anotherName = "Ronaldo";
// ```

// Only `anotherName` gets a new value:

// ```text
// myName       → "Rojan Bhattarai"
// anotherName  → "Ronaldo"
// ```

// So changing `anotherName` does **not** change `myName`.

// ### Key idea

// > **Primitive assignment copies the value.**

// ---

// # 3. Objects → Think "Reference"

// Objects are different.

// Example:

// ```javascript
// let user = {
//     name: "Rojan",
//     email: "wefdsaihb@gmail.com",
//     id: "1234A"
// };
// ```

// The object itself can be thought of as living in **heap memory**, while the variable holds a reference to that object.

// Think:

// ```text
// user ───────────────► { name: "Rojan", ... }
// ```

// Now look at this:

// ```javascript
// let user1 = user;
// ```

// This does **not** create a completely new object.

// Instead, both variables refer to the same object:

// ```text
// user  ──────┐
//             │
//             ▼
//         { name: "Rojan",
//           email: "wefdsaihb@gmail.com",
//           id: "1234A" }
//             ▲
//             │
// user1 ──────┘
// ```

// Both `user` and `user1` point to the same object.

// ---

// # 4. Changing the object through one reference

// Now:

// ```javascript
// user1.email = "qwerty@gmail.com";
// ```

// We changed the object itself.

// Because `user` and `user1` refer to the **same object**, both see the changed email.

// ```javascript
// console.log(user);
// console.log(user1);
// ```

// Output:

// ```text
// {
//     name: "Rojan",
//     email: "qwerty@gmail.com",
//     id: "1234A"
// }

// {
//     name: "Rojan",
//     email: "qwerty@gmail.com",
//     id: "1234A"
// }
// ```

// ### Why?

// Before changing the email:

// ```text
// user  ──────┐
//             │
//             ▼
//         SAME OBJECT
//             ▲
//             │
// user1 ──────┘
// ```

// After:

// ```javascript
// user1.email = "qwerty@gmail.com";
// ```

// The shared object becomes:

// ```text
// SAME OBJECT
// {
//     name: "Rojan",
//     email: "qwerty@gmail.com",
//     id: "1234A"
// }
// ```

// Therefore:

// ```javascript
// console.log(user.email);
// ```

// also gives:

// ```text
// qwerty@gmail.com
// ```

// ---

// # 5. The BIG difference

// ### Primitive

// ```javascript
// let a = 10;
// let b = a;

// b = 20;

// console.log(a); // 10
// console.log(b); // 20
// ```

// Think:

// ```text
// a → 10

// b → 10

// Then b changes:

// a → 10
// b → 20
// ```

// They have independent values.

// ---

// ### Object

// ```javascript
// let a = {
//     number: 10
// };

// let b = a;

// b.number = 20;

// console.log(a.number); // 20
// console.log(b.number); // 20
// ```

// Think:

// ```text
// a ──────┐
//         ▼
//       OBJECT
//       number: 20
//         ▲
//         │
// b ──────┘
// ```

// They refer to the same object.

// ---

// # 6. Very important: Assignment is NOT the same as copying

// This:

// ```javascript
// let user1 = user;
// ```

// doesn't mean:

// > "Make a new copy of the object."

// It means:

// > "Make `user1` refer to the same object that `user` refers to."

// This is why changing a property through `user1` is visible through `user`.

// ---

// # 7. Easy way to remember

// Remember these two rules:

// ### Primitive

// ```text
// Primitive → Copy the VALUE
// ```

// Example:

// ```javascript
// let a = "Hello";
// let b = a;
// ```

// Conceptually:

// ```text
// a → "Hello"
// b → "Hello"
// ```

// They are independent.

// ---

// ### Object

// ```text
// Object → Copy the REFERENCE
// ```

// Example:

// ```javascript
// let a = { name: "Rojan" };
// let b = a;
// ```

// Conceptually:

// ```text
// a ──┐
//     ├──► same object
// b ──┘
// ```

// They refer to the same object.

// ---

// # 8. One important correction to remember

// Don't memorize:

// > "Stack = primitive, Heap = non-primitive."

// as an absolute JavaScript language rule.

// A better learning statement is:

// > **Primitive assignment behaves like copying a value, while objects/arrays/functions are reference values, so assigning them to another variable gives another reference to the same underlying object.**

// The **stack/heap explanation is a useful model** for understanding this behavior, but JavaScript itself doesn't specify that every primitive must physically live on the stack or every object must physically live on the heap.

// ---

// # 9. Quick comparison

// | Concept      | Primitive               | Object                                 |
// | ------------ | ----------------------- | -------------------------------------- |
// | Examples     | String, Number, Boolean | Object, Array, Function                |
// | Assignment   | Value is copied         | Reference is copied                    |
// | `let b = a`  | Independent value       | Same underlying object                 |
// | Changing `b` | Doesn't affect `a`      | Object changes can be seen through `a` |
// | Mental model | 📦 Copy the value       | 🔗 Copy the reference                  |

// ---

// # 10. Remember this sentence

// > **Primitive → "Here is my value."**

// > **Object → "Here is a reference to the object."**

// And therefore:

// ```javascript
// let x = 10;
// let y = x;

// y = 20;

// console.log(x); // 10
// ```

// But:

// ```javascript
// let x = { value: 10 };
// let y = x;

// y.value = 20;

// console.log(x.value); // 20
// ```

// That difference is the main idea behind this topic.
