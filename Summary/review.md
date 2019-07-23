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
En una función el, `this` se refiere al objeto global.
## Prototipos
### Caso constructor
Cuando se reasigna el prototipo de una función constructor, entonces su constructor se pierde.
```JavaScript
function Animal(){
    this.alive = true
}
let dog = new Animal()
Animal.prototype.numLegs = 4
Animal.prototype = {
    constructor : Animal,   // por eso es bueno indicar su constructor
    numLegs :4,
    eat : function(){
        console.log(`It's eating`)
    }
}
let cat = new Animal()
```

## typeof y instanceof
`typeof` retorna un String indicando que tipo del operando sin evaluarlo.
```JavaScript
console.log(typeof 1)       // number
console.log(typeof "Texto") // string
console.log(typeof true)    // boolean
```
`instanceOf` es útil cuando se necesite confirmar el tipo de objeto en tiempo de ejecución, lo que hace es verificar si un objeto en su cadena de prototipos contiene la propiedad `prototype` de un constructor.
```JavaScript
//Ejemplo 1
function Animal(){
    this.vivo = true
}
var perro = new Animal()
console.log(perro instanceof Animal)    //true

//Ejemplo 2
function Persona(nombre){
    this.nombre = nombre
}
var serVivo = {vive : true};
Persona.prototype = serVivo;
var persona1 = new Persona('Fabrizio')
var persona2 = Object.create(serVivo);
console.log(persona1 instanceof Persona)    //true
console.log(persona2 instanceof Persona)    //true pero porqué?
```
**NOTA:** `Object.create(objeto)` hace que se cree un objeto teniendo como prototipo al objeto existente.   

En el último ejemplo el `console.log` indica un resultado `true`, pero ¿porqué?, sucede que el prototipo de `persona2` es `serVivo` pero el prototipo de la función constructor también es `serVivo`, por eso es verdadero.

## Arreglos
- .reverse()
    ```JavaScript
    var arreglo = [1,2,3,4]
    arreglo.reverse()   // [4, 3, 2, 1]
    ```
- .map()
    ```JavaScript
    var arreglo = [1,2,3,4]
    arreglo.map(function(elemento){return elemento*2})  //[2, 4, 6, 8]
    ```
- .join()
    ```JavaScript
    var arreglo = [1,2,3,4]
    arreglo.join(" - ") //"1 - 2 - 3 - 4"
    ```
- .split()
    ```JavaScript
    arreglo = "1,2,3,4".split(",")  //["1", "2", "3", "4"]
    ```
- .push()
    ```JavaScript
    var arreglo = [1,2,3,4]
    // retorna la nueva longitud del arreglo
    arreglo.push(5) //5
    ```
- .unshift()
    ```JavaScript
    var arreglo = [1,2,3,4]
    // retorna la nueva longitud del arreglo
    arreglo.unshift(0)  //5
    console.log(arreglo)    //[0, 1, 2, 3, 4]
    ```
- .shift(): Sirve para eliminar el primer elemento.
    ```JavaScript
    var arreglo = [1,2,3,4]
    //retorna el elemento eliminado
    arreglo.shift() //1
    console.log(arreglo)    //[2, 3, 4]
    ```
- .toString()
    ```JavaScript
    var arreglo = [1,2,3,4]
    arreglo.toString()  //"1,2,3,4"
    ```
- .pop()
    ```JavaScript
    var arreglo = [1,2,3,4]
    //retorna el elemento eliminado
    arreglo.pop()   //4
    console.log(arreglo)    //[1, 2, 3]
    ```
- splice()
    ```JavaScript
    var arreglo = [1,2,3,4]
    arreglo.splice(1,2,"2","3") //[2, 3]
    console.log(arreglo)        //[1, "2", "3", 4]
    ```
- .slice()
    ```JavaScript
    var arreglo = [1,2,3,4]
    arreglo.slice(0,3)  //[1, 2, 3]
    ```
## Objeto `arguments`
Las funciones en JavaScript tienen incorporadas un objeto llamado `arguments` ("argumentos" en español), este objeto contiene los argumentos que se pasan al invocar una función.   
Lo curioso de este objeto es que no es un `array`, aunque es muy similar ya que no tiene ninguna de las propiedades de un array, excepto `length`
**Nota:** No es posible usarlos en funciones flechas.
```JavaScript
//Ejemplo 1
function suma(){
    var suma=0
    for (var index = 0; index < arguments.length; index++) {
        suma+=arguments[index]
    }
    console.log(suma)
}
suma(1,2,3,4,5,6,7) // 28

// Ejemplo 2
function funcion(a,b,c){
    console.log(arguments)
    console.log(b)
    arguments[1]=20
    console.log(b)
    console.log(arguments)
}
funcion(1,2,3)
```
## Datos primitvos y sus contrapartes de objetos
Sabemos que existen 5 tipos de datos primitivos:
- number
- string
- boolean
- null
- undefined
Sin embargo, los datos primitivos number, string y boolean tienen su contraparte de objetos, llamados Number, String y Boolean.
Si `Number` vemos el prototipo de este objeto vemos que tiene propiedades como ``toFixed()`.
Veamos el siguiente caso:
```JavaScript
//Ejemplo 1
var a = new Number(8)
console.log(a.toFixed(2))   // "8.00"

//Ejemplo 2
var b = 8
console.log(b.toFixed(2))   // "8.00"
// No que solo este método era del objeto Number?
```
En el ejemplo 2 vemos que si tomamos a `b` siendo un dato primitivo y queremos usar el método `toFixed()` no resulta un error, esto es gracias al *type coercion* ya que por una fraccion de segundos se esta usando el objeto Number para poder usar el método en mención.

### Number
```JavaScript
var numero = 23.45
console.log(numero.toFixed(2))  //  23.45
console.log(typeof numero.toFixed(2))   //  string

console.log(numero.toString())  //  23.45
console.log(typeof numero.toString())   //  string

console.log(numero.toPrecision(3))  //  23.4
console.log(typeof numero.toPrecision(3))   //  string

numero = new Number(23)
console.log(numero.valueOf())   //  23
console.log(typeof numero.valueOf())    // number
```
### Boolean
```JavaScript
var valor = new Boolean()   //  Si no colocamos un valor en el contructor, la variable tomara el valor de false
console.log(valor)  

// Veremos que se imprimirá el mensaje porque estamos pasando un objeto y en un contexto booleano un objeto será true
if(valor){
    console.log("Me imprimí")
}   

// En cambio si pasamos su valor primitivo ahora si sera false
if(valor.valueOf()){
    console.log("A que sí me imprimo de nuevo")
}
```
### String
El objeto String no es una cadena de caractéres como en los demás lenguajes de programación, como dice su nombre, es un objeto.
```JavaScript
var a = new String("abecedario") 
console.log(a)
// algunos métodos
var cadena = new String("abecedario") 
console.log(cadena.toUpperCase())   //  ABECEDARIO
console.log(cadena.toLowerCase())   //  abecedario
console.log(cadena.indexOf("z"))    // -1
console.log(cadena.indexOf("e"))    //  2
console.log(cadena.indexOf("e",3))  //  4
console.log(cadena.lastIndexOf("a"))    //  6
console.log(cadena.substr(0,5))     //  abece
console.log(cadena.split(""))       //  ["a", "b", "e", "c", "e", "d", "a", "r", "i", "o"]
```
### Math
```JavaScript
var numero = 1.1
console.log(Math.floor(numero)) // devuelve el menor entero
console.log(Math.ceil(numero))  // devuelve el mayor entero
console.log(Math.round(numero)) // devuelve el numero redondeado

// Función para generar número aleatorios con rangos
function generarAleatorios(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
```
Para mayor entendimiento de la funcion `generarAleatorios()`, puede visitar el siguiente [link](https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range)

## Expresiones Regulares
Las expresiones regulares son patrones utilizados para encontrar una determinada combinación de caracteres dentro de una cadena de texto.
### Creación de una expresión regular
```JavaScript
var re = /JS/   // Usando una representación literal

var re = new RegExp('JS')   //  Usando la función constructor del objeto RegExp
```
```JavaScript
// Caractéres especiales

var texto = `Probando como funcionan las expresiones regulares`
var coincidencias = texto.match(/^P/)   // ^ permite buscar al inicio de la entrada
console.log(coincidencias)

coincidencias = texto.match(/s$/)       // $ permite buscar al final de la entrada
console.log(coincidencias)

coincidencias = texto.match(/.../)      // . coincide con cualquier caracter
console.log(coincidencias)

coincidencias = texto.match(/[a-zA-Z]/) // [] permite buscar por rangos
console.log(coincidencias)

coincidencias = texto.match(/\s/)       // permite buscar todos los espacios en blanco
console.log(coincidencias)

coincidencias = texto.match(/\w/)       // [a-zA-Z0-9]
console.log(coincidencias)

coincidencias = texto.match(/\d/)       // [0-9]
console.log(coincidencias)

coincidencias = texto.match(/\w/i)       // i hace que la busqueda sea insensible a las mayusculas y minusculas
console.log(coincidencias)

coincidencias = texto.match(/\w/g)       // g permite que sea una busqueda generalizada y no termine la búsqueda en el primer resultado
console.log(coincidencias)

texto = `Probando como funcionan
las expresiones regulares`

coincidencias = texto.match(/^\w/igm)   // m permite una búsqueda multilinea
console.log(coincidencias)

texto = `1 10 100 10000 1000000`

coincidencias = texto.match(/10+/g)      // + permite buscar una o más ocurrencias
console.log(coincidencias)

coincidencias = texto.match(/10*/g)      // * permite buscar cero o más ocurrencias
console.log(coincidencias)

coincidencias = texto.match(/10?/g)      // ? permite buscar cero o una ocurrencia
console.log(coincidencias)

coincidencias = texto.match(/10{2,4}/g)  // {} permite indicar el rango de la cantidad de ocurrencias del caracter
console.log(coincidencias)
```

## Manejo de errores
`try` permite definir un bloque de codigo que será analizado en busca de errores.
`catch` permite definir un bloque de codigo que se ejecutara si existe un error
`finally` permite ejecutar el código despues del `try` y `catch`
```JavaScript
try{
    var numero = 60
    if(numero < 50){
        throw 0
    }else{
        throw 1
    }
}
catch(error){
    if(error === 0){
        console.log("El número es menor que 50")
    }
    if(error === 1){
        console.log("El número es mayor que 50")
    }
}
finally{
    console.log("Siempre se va a ejecutar")
}
```
Cuando sucede un error, JavaScript para la ejecución y genera un mensaje de error, con términos técnicos, JavaScript lanza un una excepcion *(throw an exception - en inglés)*. 
`throw` permite crear errores personalizados.
Podemos crear un objeto del tipo `Error` que tiene dos propiedades: `name` y `message`.
```JavaScript
try{
    var numero = 2
    if(numero%2===0){
        throw new Error("par")
    }else{
        throw new Error("impar")
    }
}
catch(error){
    console.log(error)
    console.log(error.message)
    console.log(error.name)
}   
```
## Cookies
Cookies son informaciones, almacenados en pequeños archivos de texto, son de gran ayuda porque nos permite recordar la información sobre el cliente.    
Ejem.: cuando el cliente ingresa a la página web el cookie puede almacenar su nombre/usuario y cuando el cliente vuelva a ingresar a la página, ésta sabrá el nombre/usuario del cliente.
```JavaScript
// crear una cookie
function crearCookie(nombre,valor){
    valor = encodeURIComponent(valor)
    var hoy = new Date()
    hoy.setMonth(hoy.getMonth()+1)
    document.cookie = nombre+"="+valor+"; expires="+hoy.toUTCString()
}

// eliminar una cookie
// para eliminar pasamos una fecha pasada
function borrarCookie(nombre){
    var hoy = new Date()
    hoy.setMonth(hoy.getMonth()-1)
    document.cookie = nombre+"=x; expires="+hoy.toUTCString()
}

// obtenemos el valor de una cookie
function getCookie(nombre){
    var cookies = document.cookie
    var cookieArr = cookies.split("; ")
    for(var i = 0;i< cookieArr.length;i++){
        cookieArr[i] = cookieArr[i].split("=")
        if(cookieArr[i][0] === nombre)  return decodeURIComponent(cookieArr[i][1])
    }
}
```

## call(), apply() y bind()
Métodos predefinidos de JavaScript que nos permite usar los métodos de cierto objeto en otro objeto distinto al anterior, sin la necesidad de tener que copiar el método.
Estos funcionan de la siguiente manera: el objeto `this` del método que queremos aplicar ahora apunta al objeto que estamos pasando como argumento en los métodos `call()`, `apply()` y `bind()`
```JavaScript
function Perro(nombre){
    this.nombre = nombre
}
Perro.prototype.ladrar = function(){
    return this.nombre + " esta ladrando"
}
Perro.prototype.presentacion = function(){
    return "Hola mi nombre es "+this.nombre
}
var perro1 = new Perro("Scott")
console.log(perro1)
function Gato(nombre){
    this.nombre = nombre
}
Gato.prototype.maullar = function(){
    return this.nombre + " esta maullando"
}
var gato1 = new Gato("Michi")
console.log(gato1)
console.log(gato1.maullar())
console.log(perro1.presentacion.call(gato1))    //  1
console.log(perro1.presentacion.apply(gato1))   //  2
// El método bind hace que se convierta en una función por eso debe ser ejecutada
console.log(perro1.presentacion.bind(gato1)())  //  3
```
El método `call` y `apply` realizan la misma acción, la única diferencia es que si ambas recibe los argumentos aparte del objeto, el primero lo recibe de manera separada mientras que la otra lo recibe en un array.
```JavaScript
var datosPersonas = {
    formulario : function(distrito, pais){
        return this.nombre +" vive en "+distrito+", "+pais
    }
}
var persona = {
    nombre : "Fabrizio"
}
console.log(datosPersonas.formulario.call(persona,"San Juan de Miraflores","Peru"))
console.log(datosPersonas.formulario.apply(persona,["San Juan de Miraflores","Peru"]))
```
El método `bind()` lo que hace es crear una función que puede ser llamada despues.
```JavaScript
//Basandonos en el ejemplo anterior
var imprimirPersona = datosPersonas.formulario.bind(persona)
console.log(imprimirPersona("San Juan de Miraflores","Peru"))
```
Se preguntarán, ¿Para qué me sirve todo esto?. Bueno esto viene **Funciones de Préstamo** o (Function Borrowing), como la explicación inicial de esta sección, nos permite usar métodos de una objeto en otro objeto.
El beneficio de las Funciones de prestamos, es de no usar herencias.
Por ejemplo, hay objetos que no son arreglos en sí pero gracias a las funciones de préstamos que nos permite tratarlos cómo tal.
```JavaScript
function Sumar(){
    var numeros = Array.prototype.slice.call(arguments)
    var suma = 0
    for(var iterador=0;iterador<numeros.length;iterador++){
        suma+=numeros[iterador]
    }
    return suma
}
console.log(Sumar(1,2,3,4,5,6,7))
```
El `Array.prototype.slice.call(arguments)` permite tomar al objeto `arguments` y convertirlo a un array, para entender la explicación puede ir al siguiente [enlace](https://stackoverflow.com/questions/7056925/how-does-array-prototype-slice-call-work)

## Bucles
### for/in
Permite iterar sobre las propiedades del objeto
```JavaScript
function Persona(nombre,apellido,edad){
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad
}
Persona.prototype.pais = "Peru" 
Persona.prototype.comer = function(){
    console.log("ñam ñam")
}
var fabrizio = new Persona("fabrizio","condori",20)
for ( propiedad in fabrizio) {
    // hasOwnProperty() permite saber si una propiedad es propia de un objeto
    if (fabrizio.hasOwnProperty(propiedad)) {
        console.log(propiedad)
    }
}
```
### Rotuladores
```JavaScript
for_principal:
for (var index = 0; index < 5; index++) {
    console.log(index)
    console.log("p")
    for_secundario:
    for (var i = 0; i < 5; i++) {
        console.log(i)
        console.log("s")
        for (let j = 0; j < 5; j++) {
            console.log(j)
            console.log("t")
            if(j===2)   continue for_secundario
        }
    }
}
```
## setTimeout y setInterval
`setTimeout()` método que llama a una función que sera evaluada despues del tiempo que se indica como parámetros (milisegundos)
```JavaScript
setTimeout(function(){
    console.log("Me ejecute despues de 3 seg.")
}, 3000);
```
`setInterval()` método que llama a una función o evalua una expresión en intervalos de tiempos especificados.
```JavaScript
var segundo = 0
//hace que se ejecute la función anómima cada segundo
var intervalo = setInterval(function () {
    segundo++
    console.log(segundo)
}, 1000);
```
Este método seguira llamando a la función hasta que el método `clearInterval()` es llamado.
```JavaScript
function pararIntervalo(){
    clearInterval(intervalo)
}
function segundos() {
    segundo++
    console.log(segundo)
}
var intervalo = setInterval(segundos,1000)
```
## 'use strict'
Es una expresión literal introducido en ECMAScript 5 y su propósito es para indicar que el código debe ser ejecutado en **modo estricto**.
Se puede aplicar a un script por completo o a funciones individuales.   
Usando el modo estricto, tendremos errores si realizamos lo siguiente:
- No podemos crear una variable sin inicializarla.
    ```JavaScript
    'use strict';
    x = 123
    console.log(x)  // Uncaught ReferenceError: x is not defined
    ```
- Si asignamos un valor a variables que no pueden ser asignadas (NaN,undefined). En un codigo normal, no causaria efecto alguno la asignación pero en el modo estricto lanza una excepcion de asignaciones.
    ```JavaScript
    'use strict';
    var undefined = 12  
    console.log(undefined)  // Uncaught TypeError: Cannot assign to read only property 'undefined' of object '#<Window>'
    ```
- Eliminar propiedades que no son eliminables. Si se hace eso en el codigo normal, la acción queda sin efecto.
    ```JavaScript
    'use strict';
    delete Object.prototype // script.js:805 Uncaught TypeError: Cannot delete property 'prototype' of function Object() { [native code] }
    ```
- Nombre de parámetros de una función no únicos.
    ```JavaScript
    'use strict';
    function funcion(a,b,a){
        console.log(a,b)
    }
    funcion(1,2,3)
    ```
- Usar la notación octal.
    ```JavaScript
    'use strict';
    var a = 010;    // Uncaught SyntaxError: Octal literals are not allowed in strict mode.
    ```
- Definir funciones en bloques.
    ```JavaScript
    if(4>2){
        function funcion(){
            console.log("asdasd")
        }
    }else{
        function funcion(){
            console.log("hahhahaha")
        }
    }
    funcion()       // Uncaught ReferenceError: funcion is not defined
    ```
- Usar las siguientes palabras reservadas: implements, interface, let, package, private, protected, public, static, y yield.