const instagram = new Object();
instagram.id ="12as"
instagram.name = "ronaldo"
instagram.isLoggedIn = true

// console.log(instagram);

const regularUser = {

    email: "ghgfdj@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Rojan",
            lastname: "Bhattarai",
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b" }
const obj2 = {3: "a", 4: "b" }

// const obj3 = {obj1, obj2};
const obj4 = Object.assign(obj1, obj2);

// console.log(obj3);
// console.log(obj4);
// console.log(obj1);






const cources = {
    courcesname:"javascript",
    price: "100000",
    courceInstructor: "Rojan"
}

const {courceInstructor: instructor} = cources
console.log(instructor);

// console.log(courceInstructor);


// JSON 
// {
//     name: "Rojan"
//     discription: "javascript"
// }

[

    {},
    {},
    {},
]