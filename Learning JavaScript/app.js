'use strict'
console.log("HOLA");

// **** Variables
var nombre = "Roxana"; // variables globales, mala práctica
let edad = 18; 
const altura = 1.55; // constante, no cambia valor

// **** Cadenas de texto (Strings)
let nombre1 = "Carlitos Mixwell";
let apellido = "Ramirez Mendoza";

console.log(
    nombre1.length, //numero de caracteres
    apellido.length,
    nombre1.toUpperCase(), // pasar a mayusculas
    apellido.toLowerCase(), // pasar a minusculas
    nombre1.includes("tenz"), // verifica si esta en el string
    nombre1.trim(), // quita los espacios o caracteres al rededor del texto
    apellido.split(" "), // separa por valor dado
); 

// **** Template Strings
let nombre2 = "Arian";
let apellido2 = "Ramirez";
// concatenación
let saludo = "Hola mi nombre es" + nombre + " " + apellido + ".";
// interpolación de variables -> template strings
let saludo2 = `Hola mi nombre es ${nombre2} ${apellido2}.`
console.log(saludo2);

// **** Numbers
let a = 2;
let b = 1;
let c = 23.2342;

console.log(
    typeof c, // tipo de variable
    c.toFixed(1), // redondea al numero de decimales que quieras
    parseInt(c), // retorna el entero, convierte a entero
    parseFloat(c), // retorna el numero con decimales, convierte a float
);

// **** Boolean
let verdad = true;
let falso = false;

console.log(
    Boolean(0), // = false
    Boolean(-7),// = true
    Boolean(""),// = false
    Boolean(" ")// = true
);

// ***** NULL / UNDEFINED / NAN
// null y undefined representan un valor ausente
// se diferencia en que undefined no ha sido inicializada
//  null es un valor especial que indica la ausencia de valor
// NAN - not a number
let indefinida; //no definido
console.log(indefinida);
let nulo = null;
console.log(nulo);
let noesNumero="hola"*4.5;
console.log(noesNumero);

// FUNCIONES (declaradas, expresadas)
function esFuncion(){
    let hola = [1,2,3,5,4];
    console.log(hola);
    for (let i = 0; i < hola.length; i++) {
        hola[i] += hola[i]*8;
    }
    console.log(hola);
    return 8;
}
let valor = esFuncion(); // RETORNA VALOR
esFuncion(); //-> llamada a funcion

// con parametros

function hola(nombre = "Desconocido", edad = 9){
    console.log(`hola mi nombre es ${nombre} y tengo ${edad} años`);
}

hola("arian", 8);
hola();
// funciones declarada vs expresadas
// Js hace un hoisting de las funciones antes de las llamadas

funcionDeclarada();
function funcionDeclarada(){
    console.log("funcion declarada, puede invocarse en cualquier parte del codigo, incluso antes de que sea declarada");
}
funcionDeclarada();
// se suele usar const para funciones expresadas
const funcionExpresada = function (){
    console.log("Esto es una funcion expresada, es decir se asigno como valor a una variable, si invocamos esta funcion antes de su def JS que no existe");
}
funcionExpresada();
// en frameworks y librerias como react, angula o vue, se suele utilizar mas funciones expresadas, ademas se considera buena practica el usarla

// ***** ARREGLOS (ARRAYS)
const arrA = []; 
const arrB = [1, 2, 3, "hola"];
console.log(arrB.length); // retorna el numero de elementos del arrreglo
console.log(arrB[3]);
const arrC = Array.of("X", "Y", "Z", 8, 9, 10);
console.log(arrC);
const arrD = Array(100).fill("23");
console.log(arrD);
// en desuso
const arrE = new Array();
const arrF = new Array("a",1,2,3);
const colores = ["rojo", "verde", "azul"];
colores.push("negro"); // agrega un elemento al final del arreglo
console.log(colores);
colores.pop(); // elimina un elemento al final del arreglo
console.log(colores);
colores.forEach(function (el, index) {
    console.log(`<li id = "${index}">${el}</li>`);
    document.write(`<li id = "${index}">${el}</li>`);
});

// ***** OBJETOS

const Persona = {
    nombre: "Arian",
    apellido: "Ramirez",
    edad: 19,
    pasatiempos: ["Jugar Valorant, Amar a roxi, Webear todo el día"],
    soltero: false,
    // otro objeto
    contacto: {
        email: "arnicito1202@gmail.com",
        twitter: "ari4n12",
        celular: "+51992693192"
    },
    saludar: function(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
    }

}
console.log(Persona);
Persona.saludar()
console.log(Object.keys(Persona)); //nos imprime todas los atributos del objeto
console.log(Object.values(Persona)); // nos devuelve todos los valores de los atributos.
console.log(Persona.hasOwnProperty("nombre")); // nos verifica si existe el atributo en el objeto.

// **** TIPOS DE OPERADORES
/*
    Aritméticos : + - * / % ()
    Relacionales : > < >= <= == === != !== 
    = -> asignación
    == -> comparación de valores
    === -> comparación de tipo de dato y valor
    Incremento: i += 1, i++, i--, ++i, --i
    Logicos:
    ! -> Not
    || -> Or
    && -> And
*/

// **** CONDICIONALES 
let age = 10;
if(age>18) {
    console.log("Hola");
}else if(age <= 23){
    console.log("A");
}else{
    console.log("X");
}

// Operador ternario
console.log("Operador ternario");
let eresMayor = (age>=18)
? "Eres mayor de edad"
: "Eres menor de edad";
console.log(eresMayor);

// switch - case
let day = "lun";
switch (day) {
    case "lun":
        console.log("es lunes");
        break;
    case "mar":
        console.log("es mar")
        break;
    case "mier":
        console.log("es mier")
        break;
    case "juev":
        console.log("es juev")
        break;
    case "vier":
        console.log("es vier")
        break;
    case "sab":
        console.log("es sab")
        break;
    case "dom":
        console.log("es dom")
        break;
    default:
        console.log("No es un día");
        break;
}