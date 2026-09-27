const myNumbers = [1, 2, 3, 4, 5];
const newNum = myNumbers.filter((num) => num > 4);
console.log(newNum);

const myCharacter = ["a", "b", "c", "d", "e", "f"];
const newChar = myCharacter.filter ((num) => {
    return num > 0
} );
console.log(newChar);