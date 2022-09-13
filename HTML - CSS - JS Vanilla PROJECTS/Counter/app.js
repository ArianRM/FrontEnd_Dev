let c = 0;
const counter = document.getElementById('counter');
const btnDecrease = document.getElementById('decrease');
const btnReset = document.getElementById('reset');
const btnIncrease = document.getElementById('increase');

function colorize(c){
    if(c<0){
        counter.style.color = "red";
    }
    if(c>0){
        counter.style.color = "green";
    }
    if(c===0){
        counter.style.color = "blue";
    }
}

btnDecrease.addEventListener("click", ()=>{
    c--;
    counter.innerHTML = c;
    colorize(c);
});

btnIncrease.addEventListener("click", ()=>{
    c++;
    counter.innerHTML = c;
    colorize(c);
});

btnReset.addEventListener("click", ()=>{
    c = 0;
    counter.innerHTML = c;
    colorize(c);
});