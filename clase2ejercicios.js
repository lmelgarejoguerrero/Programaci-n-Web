/*Declara tres variables: una para almacenar tu ciudad, otra para almacenar tu país,
y otra para almacenar tu edad de nacimiento.
Imprime los valores en la consola y después intenta cambiar los valores y observa
los resultados con let y const. */

let ciudad = "CABA"
let pais = "Argentina"
let edad = "21"

console.log(ciudad, pais, edad)

ciudad = "cambio1"
pais = "cambio2"
edad = "cambio3"

console.log(ciudad, pais, edad)

/* Declara tres variables numéricas. Calcula el promedio de las tres y encuentra 
el residuo de la división de la suma total entre 2. Imprime los resultados. */

let variable1 = 1
let variable2 = 2
let variable3 = 3
let suma = variable1 + variable2 + variable3
let promedio = suma/3
let residuo = suma%2

console.log(promedio, residuo)

/* Declara una variable para almacenar un objeto que represente un coche
con propiedades como marca, modelo y año. Imprime el tipo de cada propiedad con typeof */
let auto =
{
    marca: 'Honda',
    modelo: 'Civic',
    año: '2013'
}
console.log(typeof(auto.marca))
console.log(typeof(auto.modelo))
console.log(typeof(auto.año))

/* Crea un array con los nombres de 5 ciudades que te gustaría visitar.
Reemplaza el tercer elemento por otra ciudad y luego imprime 
el array actualizado.*/

let deseos = ['Nueva York', 'Seul', 'Tokyo', 'Osaka', 'Paris']
console.log(deseos)

deseos[2] = 'Cartagena'
console.log(deseos)

/* Crea un array de 3 objetos que representen películas, cada una con título, director y año
de lanzamiento. Imprime el director de la última película. */
let pelicula1 = {titulo: "Interstelar", director: "Christopher Nolan", año: "2014"}
let pelicula2 = {titulo: "El conjuro 1", director: "James Wan", año: "2013"}
let pelicula3 = {titulo: "Sinister", director: "Scott Derrickson", año: "2012"}

let peliculas = [pelicula1,pelicula2,pelicula3]
console.log(peliculas[2].director)

/* Declara tres variables booleanas y usa operadores lógicos para verificar si
al menos dos son verdaderas. Imprime true o false en la consola dependiendo del resultado. */

let var1 = true
let var2 = false
let var3 = true
console.log((var1 && var2)||(var1 && var3) || (var2 && var3))
