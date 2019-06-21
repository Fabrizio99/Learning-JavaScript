//Entendiendo undefined

// console.log(x)
// console.log(y)
// console.log(z)
// console.log(objeto)
// var x = 1
// var y = "Hola"
// var z = true
// var objeto = {nombre : 'Fabrizio'}
// console.log(x)
// console.log(y)
// console.log(z)
// console.log(objeto)

// prueba que javascript no es asincrono
// let x = function(){
//     for (let index = 0; index < 8000; index++) {
//         console.log('Imprimir')
//     }
// }
// let presionoClick = function(){
//     console.log("Click")
// }
// x()

//orden de importaciones
// var nombre = "Fabrizio"
//var nombre;

//Paso por valor y referencia
// let x = 1
// let y = x
// console.log(x)
// console.log(y)
// x=2
// console.log(x)
// console.log(y)

// let persona1 = {nombre : "Fabrizio", edad : 20}
// let persona2 = persona1
// console.log(persona1)
// console.log(persona2)
// persona1.nombre = "Fernando"
// console.log(persona1)
// console.log(persona2)
// persona2.edad = 30
// console.log(persona1)
// console.log(persona2)

// Ejercicios de objetos
let persona = {
    nombre : "Fabrizio",
    apellido : "Condori",
    edad : 20,
    direccion : {
        pais : "Peru",
        departamento : "Lima",
        distrito : "Centro de Lima"
    }
}
console.log(persona)
persona.direccion.calle = "Av. Jirón de la Unión"
console.log(persona)
let direccion = persona.direccion
console.log(direccion.pais)
let campo = "nombre"
console.log(persona[campo])
campo = "apellido"
console.log(persona[campo])

// toda funcion retorna un valor
