/* Javascript: variables, tipos de datos (variable, constante, array, objeto), array de objetos, 
operadores logicos(&& ||), aritmeticos(<>) y matematicos + - * / 
parseo de datos,thurty y flasy */

//variable: espacio reservado en memoria que almacena un valor 
//bajo una denominacion

/*
C:
int edad = 10
edad = 10.1

Python
edad = 10
edad = "pepe"
nombre = "Esteban"
profesor = True
*/

//esta en una funcion o en el mismo entorno
let edad = 10
let nombre = "Esteban"
let profesor = true

/* deprecado */
var edad2 = 11 // no lo usamos (este funciona en todos lados)

//Undefined no existe, no esta definido, el null existe pero es vacio

/*constante*/

const apodo = "Steve" //javascript es case-sensitive
apodo = "otra cosa" //no se puede hacer esto

/* array (lista) */

let numero = [1,2,3,4]
const LETRAS = ["a","b","c"]
const VARIADITO = [1,"asd",True]
const ARRAYMULTIPLE = [[1,2,3],[4,5,6]] //lista de lista
//se puede modificar una lista CONST

/* objeto literal (diccionario) */
//camelCase , snake_case , kebab-case , l33t , PascalCase

let mejorProfesor =
{
    nombre : "Esteban",
    apellido : "Piazza",
    edad : 32,
    profesor : True,
    alumno: false,
    cumplirAnios: function(){
        this.edad = this.edad+1
    }

}

/* array de objetos literales */
//IMPORTANTE
let ayudante1 = {nombre:"Dani",apellido:"Maradei"}
let ayudante2 = {nombre:"Franco",apellido:"Vietyes"}
let ayudante3 = {nombre:"Sofia",apellido:"Ronconco"}

const ALUMNOS = [ayudante1,ayudante2,ayudante3]

/***************************/

/* Operadores logicos */
//Python AND - && OPERADOR
console.log(1 && 2) //devuelve 2 porque revisa los 2 y 2 es el ultimo

//Python: OR - Js: || OPERADOR
console.log(1 || 2) //devuelve 1 porque 1 es el primero y si el primero es verdadero ya te lo devuelve


//truthy falsy


//Operadores matematicos
// +
// -
// *
// /
// % resto
// **

//operadores aritmeticos (diferencia con python)

// == igualdad debil
// === igualdad estricta
// != distinto debil
// !== distinto estricto
//nosotros vamos a usar las estrictas

// >
// <
// >=
// <=
// == 
// ===
// !=
// !==
/* los debiles comparan solo el contenido, los estrictos tambien el tipo de dato */


//parseo de datos
// typeof te devuelve el tipo de variable
// Number() convertir a numero
// parseInt a entero
// parseFloat a numero con ,
// toString() o String() a string
// toFixed sumar o restar cantidades de posiciones decimales (corta a decimales)






