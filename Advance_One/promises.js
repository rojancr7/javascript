const promisesOne = new Promise(function(resolve, reject){
    //DO an Asynce task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Asynce task Is completed');
        resolve()
    }, 1000)
})

promisesOne.then(function(){
    console.log("Promise Consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 Resolved")
})