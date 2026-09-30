const add = document.querySelector('#add');
const addBtn = document.querySelector('#add');
const sub = document.querySelector('#sub');
const subBtb = document.querySelector('#sub')
let count = 0;
const display = document.querySelector('#count');

addBtn.addEventListener('click', () =>{
    if(count < 20){
        count++;
        display.textContent = count;
    }
    else{
        
    }
});

subBtb.addEventListener('click', () => {
    if(count > -20){
    count--;
    display.textContent = count;
    }
    else{
        console.log("WTF! its Already Done!")
    }
})


