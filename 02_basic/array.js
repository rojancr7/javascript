// Array

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(myArray);

// console.log(myArray[0]);




// Array methods

// myArray.push(6);
// myArray.push(7);
// myArray.pop();
// myArray.unshift(5);

myArray.shift(5);

// console.log(myArray);
// console.log(myArray.includes(9));
// console.log(myArray.indexOf(2));



const newArry = myArray.join()
// console.log(myArray);
// console.log(typeof newArry);


//slice, splice 

// console.log("A", myArray);
// const myn1 = myArray.slice(1,3);
// console.log(myn1);
// console.log("B", myArray);

// const myn2 = myArray.splice(1,3);
// console.log("C", myArray);
// console.log(myn2);
// console.log("D", myArray);

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++array 2++++++++++++++++++++++++++++*/

const myHeros = ["Ronaldo", "bale", " Ramos", "Luka"];
const movieHeros = ["Nani", "Kabir Singh", " jersey", "jannat"];
// myHeros.push(movieHeros);

// console.log(myHeros);
// console.log(movieHeros);

// const allHeroes = myHeros.concat(movieHeros);
// // console.log(allHeroes);


// const all_newHeros = [...movieHeros, ...myHeros];
// console.log(all_newHeros);

// const anotherArray = [1, 2, 3, 4, 5, 6, [12, 34, 564], [123, 456, 789, 0]];
// console.log(anotherArray);

// const realHeros = anotherArray.flat(Infinity);
// console.log(realHeros);

// console.log(Array.isArray("rojan"));
// console.log(Array.from("rojan"));
// console.log(Array.from({name: "rojan"})); // important 


const scoreOne =123;
const scoreTwo = 456;
const scoreThree = 12312;

console.log(Array.of(scoreOne, scoreTwo,scoreThree));

