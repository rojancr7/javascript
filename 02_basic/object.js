// singleton

// Object literals 
const mySyb = Symbol("key1");
const isUser ={
    "fullname": "Rojan Bhattarai",
    [mySyb]: "mykey1",
    name: "rojan",
    age: 123,
    email: "1234sdfg@gmail.com"
    
}

// console.log(isUser.email);
// console.log(isUser.mySyb);
// console.log(isUser[("email")]);
// // console.log(isUser.fullname);
// console.log(isUser[("fullname")]);

// isUser.email = "rojan@gmail.com";
// Object.freeze(isUser);
// isUser.email = "rojanwedf@gmail.com";
// console.log(isUser.email);


isUser.greeting = function(){
    console.log("Hello js User");
}

isUser.greeting2 = function(){
    console.log(`Hello user, ${this.name}`);
}

console.log(isUser.greeting);
console.log(isUser.greeting2);
isUser.greeting();