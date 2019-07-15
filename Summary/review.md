## null vs undefined
https://exploringjs.com/impatient-js/ch_undefined-null.html#occurrences-of-undefined-and-null
http://2ality.com/2013/10/typeof-null.html
https://www.ajaymatharu.com/javascript-difference-between-undefined-and-null/
https://www.todojs.com/programacion-asincrona-paso-de-continuadores-eventos-promesas-y-generadores/
## tipo de datos
### Primitivos
    - Numero
    - String
    - Booleano
    - Null
    - Undefined
### No primitivo
    - Objetos
    - Symbols

Se les dice primitivo porque solo pueden contener un solo una cosa (String, número, etc). En cambio, los objetos sirven para almacenar colecciones de datos y entidades mas complejas.
## Paso por valor y por referencia
Los datos de tipo primitivo realizar paso por valor y los objetos por referencia.
```JavaScript
// Paso por valor
let x = 1
let y = x
console.log(x)
console.log(y)
x=2
console.log(x)
console.log(y)

// Paso por referencia
let persona1 = {nombre : "Fabrizio", edad : 20}
let persona2 = persona1
console.log(persona1)
console.log(persona2)
persona1.nombre = "Fernando"
console.log(persona1)
console.log(persona2)
persona2.edad = 30
console.log(persona1)
console.log(persona2)
```
Cuando es por referencia, la variable `persona1` reserva un espacio de memoria para almacenar al objeto literal, y al asignarle a la variable `persona2` el valor de `persona1`. Lo que sucede es que `persona2` ahora esta apuntando al mismo objeto que apunta `persona1`, por eso que cuando se cambia las propiedades del objeto tanto en las variables `persona1` y `persona2`, terminan afectando a ambas.   

Este comportamiento solo lo tienen los objetos.
### Uso de paso por referencia
```JavaScript
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
```
## Funciones
Una función es un objeto y siempre retorna un valor.
```JavaScript
var miFuncion = function () {
    return 15
}
function alv(fn){
    console.log(fn())
}
alv(miFuncion)
```
Funciones con parámetros
```JavaScript
function funcion1(){
    return 'Función 1'
}
function funcion1(){
    console.log('Función 1');
    return function(mensaje){
        console.log('Función 2 '+mensaje);
        return function(){
            console.log('Entra función 3 ')
        }
    }
}
funcion1()('alv')()
```
Funciones como ciudadanos de primera clase.
```JavaScript
// las funciones pueden tener métodos o propiedades.
function funcion(){
    console.log("Mensaje de la función")
}
funcion.propiedad1 = "Propiedad de la funcion"
console.log(funcion.propiedad1)
// algunos propiedades propias de las funciones pueden ser sobreescritas pero otras no
funcion.name = "qqqqq"
console.log(funcion.name)
funcion.apply="aaaa"
console.log(funcion.apply)
```
### Objetos this
```JavaScript
var nombre = 'AAAA'
var apellido = 'BBBB'
var persona = {
    nombre : 'Fabrizio',
    apellido : 'Condori',
    imprimirDatos : function () {
        //console.log(nombre+" "+apellido)
        console.log(this.nombre+" "+this.apellido)
    },
    direccion : {
        pais : 'Peru',
        obtenerPais : function(){
            //console.log(this)
            //console.log('La dirección es '+this.pais)
            var self = this
            var nuevaDireccion = function(){
                console.log(self.pais)
            }
            nuevaDireccion()
        }
    }
}
persona.imprimirDatos()
persona.direccion.obtenerPais()
```