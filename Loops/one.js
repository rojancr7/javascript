// for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is best");
//     }
//     console.log(element);

    
    
// }

for (let i = 1; i <= 10; i++) {
    // console.log(`The value of i is: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`The value of j is: ${j}`);
        // console.log(i + '*' + j + ' =' + i * j);
    
    }
    
}

let myArray = ["Rojan", "Ronaldo", "Neymar", "Mbappe"];
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element); 
    }

// Break and continue

for (let i = 1; i <= 10; i++) {
    if(i == 5){
        // console.log("5 is deceted");
        break;
    }
    // console.log(`The value of i is: ${i}`);

}

for (let i = 1; i <= 10; i++) {
    if(i == 5){
        console.log("5 is deceted");
        continue;
    }
    console.log(`The value of i is: ${i}`);
}       
