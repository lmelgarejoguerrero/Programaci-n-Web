/*Declara tres variables: una para almacenar tu ciudad, otra para almacenar tu país,
y otra para almacenar tu edad de nacimiento.
Imprime los valores en la consola y después intenta cambiar los valores y observa
los resultados con let y const. */

let ciudad = "CABA"
let pais = "Argentina"
let edad = "21"

console.log("1a.",ciudad, pais, edad)

ciudad = "cambio1"
pais = "cambio2"
edad = "cambio3"

console.log("1b.",ciudad, pais, edad)

/* Declara tres variables numéricas. Calcula el promedio de las tres y encuentra 
el residuo de la división de la suma total entre 2. Imprime los resultados. */

let variable1 = 1
let variable2 = 2
let variable3 = 3
let suma = variable1 + variable2 + variable3
let promedio = suma/3
let residuo = suma%2

console.log("2.",promedio, residuo)

/* Declara una variable para almacenar un objeto que represente un coche
con propiedades como marca, modelo y año. Imprime el tipo de cada propiedad con typeof */
let auto =
{
    marca: 'Honda',
    modelo: 'Civic',
    año: '2013'
}
console.log("3a.",typeof(auto.marca))
console.log("3b.",typeof(auto.modelo))
console.log("3c.",typeof(auto.año))

/* Crea un array con los nombres de 5 ciudades que te gustaría visitar.
Reemplaza el tercer elemento por otra ciudad y luego imprime 
el array actualizado.*/

let deseos = ['Nueva York', 'Seul', 'Tokyo', 'Osaka', 'Paris']
console.log("4a.",deseos)

deseos[2] = 'Cartagena'
console.log("4b.",deseos)

/* Crea un array de 3 objetos que representen películas, cada una con título, director y año
de lanzamiento. Imprime el director de la última película. */
let pelicula1 = {titulo: "Interstelar", director: "Christopher Nolan", año: "2014"}
let pelicula2 = {titulo: "El conjuro 1", director: "James Wan", año: "2013"}
let pelicula3 = {titulo: "Sinister", director: "Scott Derrickson", año: "2012"}

let peliculas = [pelicula1,pelicula2,pelicula3]
console.log("5.",peliculas[2].director)

/* Declara tres variables booleanas y usa operadores lógicos para verificar si
al menos dos son verdaderas. Imprime true o false en la consola dependiendo del resultado. */

let var1 = true
let var2 = false
let var3 = true
console.log("6.",(var1 && var2)||(var1 && var3) || (var2 && var3))

/*Declara tres variables numéricas.
Compara si el primer número es mayor que el segundo y menor que el tercero.
Luego, verifica si el segundo número es distinto al tercero.
Imprime los resultados de las comparaciones. */

let numero1 = 33
let numero2 = 59
let numero3 = 99

console.log("7a.",(numero1 > numero2) && (numero1 < numero3))
console.log("7b.",numero2 !== numero3)

/* Declara dos variables que almacenen strings (por ejemplo, tu nombre y tu apellido).
Luego, crea una tercera variable que concatene las dos primeras
y muestra el resultado en la consola.*/

let MiNombre = "Lucas"
let MiApellido = "Melgarejo"
let NombreApellido = MiNombre+MiApellido
console.log("8.", NombreApellido)

/* Declara una variable numérica y utiliza los operadores de incremento (++)
y decremento (--) para modificar su valor.
Imprime el valor de la variable después de cada operación. */

let varNum = 101
console.log("9. Valor inicial", varNum)

varNum++
console.log("9. Nuevo con ++", varNum)

varNum--
console.log("9. Nuevo con --", varNum)

/*Crea un objeto que represente un estudiante con propiedades
como nombre, edad y carrera. Accede e imprime cada propiedad del objeto. */

let Estudiante = {
    nombre: 'Lucas',
    edad: 21,
    carrera: 'Licenciatura en Negocios y Tecnologia'
}
console.log('10.',"Nombre:",Estudiante.nombre, "Edad:", Estudiante.edad, "Carrera:",Estudiante.carrera)

/*Crea un array que contenga dos arrays internos, cada uno con 3 números.
Accede al segundo elemento del primer array interno. */

let listaDeLista = [
    [1,2,3],
    [4,5,6]
]

console.log("11.",listaDeLista[0][1])

/* Declara dos variables numéricas y utiliza los operadores >, <, >=, <=, ===, !==
para comparar sus valores. Imprime el resultado de cada comparación. */
let variableNum1 = 190
let variableNum2 = 200
console.log("12a.", variableNum1 > variableNum2)
