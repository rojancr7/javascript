// For Each Loop

const codingLanguages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

//Prototype forEach() method
// .length .map .fill .for each .filter .reduce .find .findIndex .some .every

codingLanguages.forEach( function (Language) {
    // console.log(Language);

});

codingLanguages.forEach( (Language) => {
    // console.log(Language);
})

function printMe(Language){
    // console.log(Language);
}
// codingLanguages.forEach(printMe);


codingLanguages.forEach((Language, index, arr) => {
    // console.log(`${index}: ${Language}`);
});



const myCoding = [
    {
        languageName: 'JavaScript',
        languageType: 'Scripting Language',
    },
    {
        languageName: 'Python',
        languageType: 'Scripting Language',

    },
    {
        languageName: 'Java',
        languageType: 'Object Oriented Language',
    },
    {   
        languageName: 'C++',    
        languageType: 'Object Oriented Language',
        
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    console.log(item.languageType);
}
)