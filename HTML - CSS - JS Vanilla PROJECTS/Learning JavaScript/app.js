const user = {
    name : 'arian',
    age : 12,
    city : 'lima'
}

// manipulacion del DOM

let title = document.createElement('h1');
title.innerText = "hola mundo";
document.body.append(title);

const button = document.createElement('button');
button.innerText = "Hola";
document.body.append(button);

button.addEventListener('click', function(){
    title.innerText = "Roxi es mi amorcito";;
})