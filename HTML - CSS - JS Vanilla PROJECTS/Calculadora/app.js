let result = document.getElementById("textfield");

// setting number variables
let cero = document.getElementById("cero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

//setting operations variables
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let divide = document.getElementById("divide");
let mult = document.getElementById("mult");
let equals = document.getElementById("equals");

//setting variables for calculate

let num1;
let num2;
let op;

cero.onclick = ()=>{
    result.textContent += "0";
}

one.onclick = ()=>{
    result.textContent += "1";
}

two.onclick = ()=>{
    result.textContent += "2";
}

three.onclick = ()=>{
    result.textContent += "3";
}

four.onclick = ()=>{
    result.textContent += "4";
}

five.onclick = ()=>{
    result.textContent += "5";
}

six.onclick = ()=>{
    result.textContent += "6";
}

seven.onclick = ()=>{
    result.textContent += "7";
}

eight.onclick = ()=>{
    result.textContent += "8";
}

nine.onclick = ()=>{
    result.textContent += "9";
}

function clean(){
    result.textContent = " ";
}

plus.onclick = ()=>{
    num1 = result.textContent;
    op = "+";
    clean()
}

minus.onclick = ()=>{
    num1 = result.textContent;
    op = "-";
    clean()
}

mult.onclick = ()=>{
    num1 = result.textContent;
    op = "*";
    clean()
}

divide.onclick = ()=>{
    num1 = result.textContent;
    op = "/";
    clean()
}

equals.onclick = ()=>{
    num2 = result.textContent;
    result.textContent = operation(op);
}

function operation(x){
    let res;
    switch(x){
        case "+":
            res = parseInt(num1) + parseInt(num2);
            break;
        case "-":
            res = parseInt(num1) - parseInt(num2);
            break;
        case "*":
            res = parseInt(num1) * parseInt(num2);
            break;
        case "/":
            res = parseInt(num1) / parseInt(num2);
            break;
    }
    return res;
}