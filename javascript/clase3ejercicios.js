const PromptSync = require("prompt-sync")

/* Escribe una función que tome tres números como argumentos y retorne el mayor de ellos.
Llama a la función con diferentes valores e imprime el resultado. */
function test (a,b,c){
    if(a >= b && a >= c){
        return a
    }
    else if (b >= a && b >= c){
        return b
    }
    else{
        return c
    }
}
console.log("1.", test(17,15,17))

/* Crea una función expresada que reciba un array de strings y retorne un string que
concatena todos los elementos del array separados por espacios. */

let funcionExpresada = function (array){
    let STRINGNUEVO = ""
    for (let i = 0; i < array.length; i++){
        STRINGNUEVO += array[i]
        if(i < array.length -1){
            STRINGNUEVO += " ";
        }
    }
    return STRINGNUEVO
}
let STRINGS = ["hola", "estoy", "probando"]
console.log("2.", funcionExpresada(STRINGS))

/* Convierte la función del ejercicio anterior a una función de flecha.
Además, agrega una validación para que, si el array está vacío, retorna un mensaje de advertencia. */

let funcionExpresada2 = array =>{
    let STRINGNUEVO = ""
    for (let i = 0; i < array.length; i++){
        STRINGNUEVO += array[i]
        if(i < array.length -1){
            STRINGNUEVO += " ";
        }
    }
    return STRINGNUEVO
}
let STRINGS2 = ["hola", "estoy", "probando2"]
console.log("3.", funcionExpresada2(STRINGS2))

/* Escribe una función que tome una temperatura en grados Celsius como argumento y devuelva
un mensaje que indique si hace frío (menor a 15 grados), templado (entre 15 y 25 grados)
o calor (mayor a 25 grados). */

let temp = 23
clima(temp)

function clima(temperatura){
    if(temperatura < 15){
        console.log("Hace frio")
    }
    else if (temperatura > 15 && temperatura < 25){
        console.log("Está templado")
    }
    else{
        console.log("Hace calor")
    }
}

/* Reescribe una función que tome una hora (formato 24 horas) y
devuelva "Buenos días"si es antes de las 12, "Buenas tardes" si es entre las 12 y 18,
o "Buenas noches" si es después de las 18, utilizando operadores ternarios. */

function buenas(hora){
    return hora < 12 ? "Buenos dias" : (hora >= 12 && hora <= 18 ? "Buenas tardes" : "Buenas noches")
}

console.log(buenas(11))

/* Escribe una función que reciba cuatro argumentos booleanos y retorne true
si al menos uno de los dos primeros es verdadero y al menos uno de los dos últimos es falso. */

function argumentos(arg1,arg2,arg3,arg4){
    if ((arg1 || arg2) && (arg3 === false || arg4 === false)){
        return true
    }
}
console.log(argumentos(true,false,false,true))

/* Escribe una función que tome un número como argumento y retorne su factorial.
Utiliza una estructura if para manejar el caso base. */

function factorial(num){
    let resultado = 1
    for(let i  = 1 ; i <= num ; i++){
        resultado = resultado * i
    }
    return resultado
}

console.log(factorial(3))

/* Crea una función que salude a una persona. Si no se proporciona el nombre,
debe saludar con "Hola, invitado". */
function saludar (){
    const prompt = require('prompt-sync')();
    const nombre = prompt('¿Cuál es tu nombre?: ')
    if (nombre === ""){
        console.log('Hola, invitado') 
    }
    else{
        console.log('Hola,', nombre)
    }
}

/* Escribe una función que tome un número y retorne true si es par o false si es impar.
Utiliza el operador módulo (%) y un operador ternario. */

function parImpar (numero){
    return numero % 2 === 0 ? true : false
}
console.log(parImpar(16))

/* Crea una función recursiva que calcule la suma de los números de 1 hasta n. */

function recursiva (numero){
    let resultado = 0
    for (let i = 0; i <= numero; i++){
        resultado += i
    }
    return resultado
}
console.log(recursiva(15))



