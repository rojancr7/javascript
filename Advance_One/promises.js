// const promisesOne = new Promise(function(resolve, reject){
//     //DO an Asynce task
//     //DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Asynce task Is completed');
//         resolve()
//     }, 1000)
// })


// promisesOne.then(function(){
//     console.log("Promise Consumed");
// })


// new Promise(function(resolve, reject){ 
//     setTimeout(function(){
//         console.log('Async Task 2');
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Async 2 Resolved")
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "rojan", email:"rojan@gmail.com"})
//     }, 1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;

        if (!error) {
            resolve({ username: "rojan" });
        } else {
            reject("Error: Something went wrong");
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    });