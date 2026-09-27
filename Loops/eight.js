const myNum = [1, 2, 3, 4, 5]

const initialValue = 0;

// const myTotal = myNum.reduce(function (acc, curval){
//     console.log(`acc : ${acc} and curval ${curval}`);
//     return acc + curval
// }, 0)


const myTotal = myNum.reduce( (acc, curr) => acc+curr, 0);
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "mobile dev",
        price: 10000
    },
    {
        itemName: "android dev",
        price: 5000
    },
    {
        itemName: "data scientice",
        price: 20000
    },
]

const SoppingTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(SoppingTotal);