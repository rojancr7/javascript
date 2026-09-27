const userEmail= "wert@.ai";

if(userEmail){
    // console.log("Have");
}
else{
    // console.log("Haven't");
}

//false valuess
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy Value
// "0", 'false', " ", [], {}, function(){} 


if (userEmail.length === 0) {
    // console.log("array is empty")
    
}
else{
    // console.log("not")
}
 
const emptyObj ={}

if(Object.keys(emptyObj).length === 0){
    // console.log("Object is empty");
}

// Nullish  Coalescing Operator (??): null undefined

let val1;

val = 5 ?? 10
//  val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20




console.log(val1);


// Terniary Operator

// Condition ? True : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less") : console.log("More!")