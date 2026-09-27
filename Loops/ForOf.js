// For OF Loop
["", " ", ""]
// [{}, {}, {}]

const arr = ["a", "b", "c", "d", "e"];
for (const num of arr){
    // console.log(`The value of num is: ${num}`);

}

const greeting ="Hello World!"

for (const greet of greeting){
    //  console.log(`Each Char is: ${greet}`)
}


// Map

const map = new Map();
map.set('Np', 'Nepal');
// map.set('Np', 'Nepal');
map.set('In', 'India');
map.set('Ch', 'China');
map.set('Us', 'United States');


// console.log(map);

for (const [key, value] of map){
    console.log(key, "-", value);
}

const myObj ={
    'game': 'Football',
    "game2": 'Cricket',
    "game3": 'Basketball'
}

// for(const [key, value] of Object){
//     console.log(key, "-", value);
// }


