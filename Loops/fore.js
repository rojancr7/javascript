// For in Loop

const myObject = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    java: 'Java',
    php: 'PHP'
};

for (const key in myObject){
    // console.log(` ${key} shortcut is for ${myObject[key]}`);
}



const Programming = ['JavaScript', 'Python', 'Ruby', 'Java', 'PHP'];

for(const key in Programming){
    console.log(Programming[key]);
}

// Non iterable objects cannot be used in for...of loop, but they can be used in for...in loop.
// const map = new Map();
// map.set('Np', 'Nepal');
// map.set('In', 'India');
// map.set('Ch', 'China');
// map.set('Us', 'United States');

// for(const key in map){
//     console.log(key)
// }


