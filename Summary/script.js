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
// let persona = {
//     nombre : "Fabrizio",
//     apellido : "Condori",
//     edad : 20,
//     direccion : {
//         pais : "Peru",
//         departamento : "Lima",
//         distrito : "Centro de Lima"
//     }
// }
// console.log(persona)
// persona.direccion.calle = "Av. Jirón de la Unión"
// console.log(persona)
// let direccion = persona.direccion
// console.log(direccion.pais)
// let campo = "nombre"
// console.log(persona[campo])
// campo = "apellido"
// console.log(persona[campo])

// toda funcion retorna un valor


// var miFuncion = function () {
//     return 15
// }
// function alv(fn){
//     console.log(fn())
// }
// alv(miFuncion)

//funciones con parámetros
// function funcion1(){
//     return 'Función 1'
// }
// function funcion1(){
//     console.log('Función 1');
//     return function(mensaje){
//         console.log('Función 2 '+mensaje);
//         return function(){
//             console.log('Entra función 3 ')
//         }
//     }
// }
// funcion1()('alv')()

// funciones como ciudadanos de primera clase
// las funciones pueden tener métodos o propiedades.
// function funcion(){
//     console.log("Mensaje de la función")
// }
// funcion.propiedad1 = "Propiedad de la funcion"
// console.log(funcion.propiedad1)
// algunos propiedades propias de las funciones pueden ser sobreescritas pero otras no
// funcion.name = "qqqqq"
// console.log(funcion.name)
// funcion.apply="aaaa"
// console.log(funcion.apply)

// Objetos this
// var nombre = 'AAAA'
// var apellido = 'BBBB'
// var persona = {
//     nombre : 'Fabrizio',
//     apellido : 'Condori',
//     imprimirDatos : function () {
//         //console.log(nombre+" "+apellido)
//         console.log(this.nombre+" "+this.apellido)
//     },
//     direccion : {
//         pais : 'Peru',
//         obtenerPais : function(){
//             //console.log(this)
//             //console.log('La dirección es '+this.pais)
//             var self = this
//             var nuevaDireccion = function(){
//                 console.log(self.pais)
//             }
//             nuevaDireccion()
//         }
//     }
// }
// persona.imprimirDatos()
// persona.direccion.obtenerPais()

//Repaso del objeto this
// var estudiante = {
//     nombre : 'Fabrizio',
//     apellido : 'Condori',
//     imprimirNombre : function(){
//         console.log(this)
//         console.log(`${this.nombre} ${this.apellido}`)
//         return function(){
//             console.log(this)
//             console.log('mensaje')
//         }
//     }
// }

// palabra reservada new
// con esta palabra reservada permite crear un objeto vacio y llamar a la función constructor invocada.
// function Persona(nombre, apellido,edad){
//     this.nombre = nombre,
//     this.apellido = apellido,
//     this.edad = edad,
//     this.imprimirDatos = function(){
//         console.log(`${this.nombre} ${this.apellido } (${this.edad})`)
//     }
// }

// var persona1 = new Persona('Fabrizio','Condori',19)
// console.log(persona1)
// persona1.imprimirDatos()

// Prototipo es un objeto asociado con cada funcion y objeto por
// defecto en JavaScript, donde la propiedad prototipo de una funcion
// es accesible y modificable pero el de un objeto no es visible.
// Cada funcion posee un objeto prototipo por defecto
// El objeto prototipo es un objeto especial enumerable al cual se le puede
// añadir nuevas propiedades que seran compartidas por todas las
// instancias de la funcion constructor. Pero lo peculiar es que 
// no puede ser iterable por bucles como for...in o foreach

// function Persona(nombre){
//     this.nombre = nombre
// }
// var p1 = new Persona('Juan');
// var p2 = new Persona('Pedro');
// console.log(p1)
// console.log(p2)
// Persona.prototype.nacionalidad = 'Peru'
// console.log(p1)
// console.log(p2)

// cada objeto que es creado con la palabra reservada "new", incluye
// una propiedad __proto__ que apunta al objeto prototipo de la función
// que fue creada el objeto
// p1.prototype    // undefined
// p1.__proto__    // object

// Como se menciono, la propiedad prototype de objetos es invisible
// podemos usar Object.getPrototypeOf(obj) en vez de __proto__ 
// para acceder al objeto prototipo
// Object.getPrototypeOf(p1)   //{nacionalidad: "Peru", constructor: ƒ}

// cambiando prototipos
// Persona.prototype = {nacionalidad : 'Estados Unidos'}
// var p3 = new Persona('Fabrizio');
// console.log(p1.nacionalidad)
// console.log(p2.nacionalidad)
// console.log(p3.nacionalidad)

// funciones anonimas
// (function(){
//     var a = 10
//     console.log(a)
// }())

// function funcion(fn){
//     var result = fn()
//     return result
// }
// var n1=1
// var n2=2
// console.log(funcion(function(){
//     return n1+n2
// }))





//typeof
//console.log(typeof NaN)
//console.log(x)
//let x=10

// function go(n) {
//     // n here is defined!
//     console.log(n); // Object {a: [1,2,3]}
  
//     for (var n of n.a) { // ReferenceError
//       console.log(n);
//     }
//   }
  
//   go({a: [1, 2, 3]});




//instance of
// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   function Tesla() {
//     this.autodrive = true;
//   }
//   Car.prototype = new Tesla();
  
//   const auto = new Car('Honda', 'Accord', 1998);
  
//   console.log(auto instanceof Car); // true
//   console.log(auto instanceof Tesla); // true


// function foo() {}
// const bar = { a: 'a'};

// foo.prototype = bar;

// // Is bar an instance of foo? Nope!
// console.log(bar instanceof foo); // false

// // Ok... since bar is not an instance of foo,
// // baz should definitely not be an instance of foo, right?
// const baz = Object.create(bar);

// // ...Wrong.
// console.log(baz instanceof foo); // true. oops.


// let animal = {
//     eats: true
//   };
  
//   function Rabbit(name) {
//     this.name = name;
//     this.sex = 'Male'
//   }
  
//   Rabbit.prototype = animal;
//   Rabbit.prototype.fuck = true;
  
//   let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
  
//   console.log( rabbit.eats ); // true
//   Rabbit.prototype = {fuck : false}
//   let rabbit2 = new Rabbit('Black Rabbit');

// function Persona(nombre){
//     this.nombre = nombre
// }
// var serVivo = {vive : true};
// Persona.prototype = serVivo;
// var persona1 = new Persona('Fabrizio')
// var persona2 = Object.create(serVivo);
// console.log(persona1 instanceof Persona)
// console.log(persona2 instanceof Persona)
// function Animal(){
//     this.vivo = true
// }
// var perro = new Animal()
// console.log(perro instanceof Animal)


// var arreglo = [1,2,3,4]
// console.log(arreglo)
// console.table(arreglo)
// console.log(arreglo[0])
// console.log(arreglo[-1])

// var arreglo = [
//     1,
//     "Texto",
//     true,
//     null,
//     function(){
//         console.log(this)
//     }
// ]

// function funcion(a,b,c){
//     console.log(arguments)
//     if(arguments.length!==3){
//         console.log("Se necesita 3 parámetros.")
//         return;
//     }
//     console.log(a+b+c)
// }
// funcion(10,20,30,40)

// function suma(){
//     var suma=0
//     for (var index = 0; index < arguments.length; index++) {
//         suma+=arguments[index]
//     }
//     console.log(suma)
// }
// suma(1,2,3,4,5,6,7)

// function funcion(){
//     console.log(typeof arguments)
//     var arregloArgumentos = arguments[1]
//     console.log(arregloArgumentos)
//     arregloArgumentos = "cambiado!!"
//     console.log(arguments)
// }
// funcion(11,23,[1,2,3])

// function funcion(a,b,c){
//     console.log(arguments)
//     console.log(b)
//     arguments[1]=20
//     console.log(b)
//     console.log(arguments)
// }
// funcion(1,2,3)

// function funcion(){
//     var arreglo = []
//     var numero = 1
//     console.log(numero)
//     arreglo.push(function () {
//         console.log(numero)
//     })
//     console.log(numero)
//     numero = 2
//     console.log(numero)
//     arreglo.push(function () {
//         console.log(numero)
//     })
//     console.log(numero)
//     return arreglo
// }
// var arregloFuncion = funcion()
// arregloFuncion[0]()
// arregloFuncion[1]()

// function Animal(){
//     this.alive = true
// }
// let dog = new Animal()
// Animal.prototype.numLegs = 4
// Animal.prototype = {
//     constructor : Animal,
//     numLegs :4,
//     eat : function(){
//         console.log(`It's eating`)
//     }
// }
// let cat = new Animal()


// function A() {};
// var a = new A();
// var b = new A();

// A.prototype = {};

// var c = new A();
// console.log(a.constructor === b.constructor);
// console.log(a.constructor === c.constructor);

// function datosArreglo(){
//     var arreglo = []
//     var numero = 1
//     arreglo.push(function(numero){
//         return function(){
//             console.log(numero)
//         }
//     }(numero))
//     var numero = 2
//     arreglo.push(function(numero){
//         return function(){
//             console.log(numero)
//         }
//     }(numero))
//     var numero = 3
//     arreglo.push(function(numero){
//         return function(){
//             console.log(numero)
//         }
//     }(numero))
//     return arreglo
// }
// var arrreglo = datosArreglo()
// arrreglo[0]()
// arrreglo[1]()
// arrreglo[2]()

// numero
// var numero = 23.45
// console.log(numero.toFixed(2))
// console.log(typeof numero.toFixed(2))

// console.log(numero.toString())
// console.log(typeof numero.toString())

// console.log(numero.toPrecision(3))
// console.log(typeof numero.toPrecision(3))

// numero = new Number(23)
// console.log(numero.valueOf())
// console.log(typeof numero.valueOf())

// boolean

// var valor = new Boolean()   //  Si no colocamos un valor en el contructor, la variable tomara el valor de false
// console.log(valor)  

// // Imprimio porque estamos pasando un objeto y en un contexto
// // booleano un objeto será true
// if(valor){
//     console.log("Me imprimí")
// }   
// // En cambio si pasamos su valor primitivo ahora si sera false
// if(valor.valueOf()){
//     console.log("A que sí me imprimo de nuevo")
// }   
// var cadena = new String("abecedario") 
// console.log(cadena)
// console.log(cadena.toUpperCase())
// console.log(cadena.toLowerCase())
// console.log(cadena.indexOf("z"))
// console.log(cadena.indexOf("e"))
// console.log(cadena.indexOf("e",3))
// console.log(cadena.lastIndexOf("a"))
// console.log(cadena.substr(0,5))
// console.log(cadena.split(""))
// function generarNumeroRandom(min,max){
//     return Math.random()
// }

// var numero = 1.1
// console.log(Math.floor(numero))
// console.log(Math.ceil(numero))
// console.log(Math.round(numero))

// function generarAleatorios(min,max){
//     return Math.floor(Math.random()*(max-min+1)+min)
// }

// // EXPRESIONES REGULARES
// var texto = `Probando como funcionan las expresiones regulares`
// var coincidencias = texto.match(/^P/)   // ^ permite buscar al inicio de la entrada
// console.log(coincidencias)

// coincidencias = texto.match(/s$/)       // $ permite buscar al final de la entrada
// console.log(coincidencias)

// coincidencias = texto.match(/.../)      // . coincide con cualquier caracter
// console.log(coincidencias)

// coincidencias = texto.match(/[a-zA-Z]/) // [] permite buscar por rangos
// console.log(coincidencias)

// coincidencias = texto.match(/\s/)       // permite buscar todos los espacios en blanco
// console.log(coincidencias)

// coincidencias = texto.match(/\w/)       // [a-zA-Z0-9]
// console.log(coincidencias)

// coincidencias = texto.match(/\d/)       // [0-9]
// console.log(coincidencias)

// coincidencias = texto.match(/\w/i)       // i hace que la busqueda sea insensible a las mayusculas y minusculas
// console.log(coincidencias)

// coincidencias = texto.match(/\w/g)       // g permite que sea una busqueda generalizada y no termine la búsqueda en el primer resultado
// console.log(coincidencias)

// texto = `Probando como funcionan
// las expresiones regulares`

// coincidencias = texto.match(/^\w/igm)   // m permite una búsqueda multilinea
// console.log(coincidencias)

// texto = `1 10 100 10000 1000000`

// coincidencias = texto.match(/10+/g)      // + permite buscar una o más ocurrencias
// console.log(coincidencias)

// coincidencias = texto.match(/10*/g)      // * permite buscar cero o más ocurrencias
// console.log(coincidencias)

// coincidencias = texto.match(/10?/g)      // ? permite buscar cero o una ocurrencia
// console.log(coincidencias)

// coincidencias = texto.match(/10{2,4}/g)  // {} permite indicar el rango de la cantidad de ocurrencias del caracter
// console.log(coincidencias)

// try{
//     var a = 12
//     if(a===1){
//         throw "El valor es 1"
//     }else{
//         throw "El valor es diferente de 1"
//     }
    
// }
// catch(error){
//     console.log(error)
// }
// finally{
//     console.log("Siempre se va a ejecutar")
// }


// try{
//     var numero = 2
//     if(numero%2===0){
//         throw new Error("par")
//     }else{
//         throw new Error("impar")
//     }
// }
// catch(error){
//     console.log(error)
//     console.log(error.message)
//     console.log(error.name)
// }   

// try{
//     var numero = 60
//     if(numero < 50){
//         throw 0
//     }else{
//         throw 1
//     }
// }
// catch(error){
//     if(error === 0){
//         console.log("El número es menor que 50")
//     }
//     if(error === 1){
//         console.log("El número es mayor que 50")
//     }
// }
// finally{
//     console.log("Siempre se va a ejecutar")
// }


// function Animal(name,sex){
//     this.name = name
//     this.sex = sex
//     this.alive = true
// }
// Animal.prototype.eating = function(){
//     return this.name+" is eating"
// }
// var perro = new Animal("Peluza","Female")
// console.log(perro.eating())
// function Cat(age,...args){
//     this.age = age
//     Animal.apply(this,args)
// }
// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.miau = function(){
//     return this.name+" is saying miau"
// }
// var gato = new Cat(3,"Guapo","Male")
// console.log(gato)
// console.log(gato.eating())

// var my_object = {
//     '0': 'zero',
//     '1': 'one',
//     '2': 'two',
//     '3': 'three',
//     '4': 'four',
//     length: 5
// };
// var sliced = Array.prototype.slice.call(my_object, 3);

// console.log(sliced);

// var fn = function ( param1, param2 ) {
//     console.info( this, param1, param2 );
// }
 
// var newFn = fn.bind( console, 'param1Fixed' );
 
// fn( 'Hello', 'World' ); // Window Hello World
// newFn( 'Goodbye', 'Lenin' ); // Object { /* console*/ } param1Fixed Goodbye

// function Perro(nombre){
//     this.nombre = nombre
// }
// Perro.prototype.ladrar = function(){
//     return this.nombre + " esta ladrando"
// }
// Perro.prototype.presentacion = function(){
//     return "Hola mi nombre es "+this.nombre
// }
// var perro1 = new Perro("Scott")
// console.log(perro1)
// function Gato(nombre){
//     this.nombre = nombre
// }
// Gato.prototype.maullar = function(){
//     return this.nombre + " esta maullando"
// }
// var gato1 = new Gato("Michi")
// console.log(gato1)
// console.log(gato1.maullar())
// console.log(perro1.presentacion.call(gato1))
// console.log(perro1.presentacion.apply(gato1))
// console.log(perro1.presentacion.bind(gato1))

// var datosPersonas = {
//     formulario : function(distrito, pais){
//         return this.nombre +" vive en "+distrito+", "+pais
//     }
// }
// var persona = {
//     nombre : "Fabrizio"
// }
// console.log(datosPersonas.formulario.call(persona,"San Juan de Miraflores","Peru"))
// console.log(datosPersonas.formulario.apply(persona,["San Juan de Miraflores","Peru"]))
// var imprimirPersona = datosPersonas.formulario.bind(persona)
// console.log(imprimirPersona("San Juan de Miraflores","Peru"))

// var persona = {
//     nombre : "Fabrizio",
//     apellido : "Condori",
//     edad : 15
// }


// function Persona(nombre,apellido,edad){
//     this.nombre = nombre,
//     this.apellido = apellido,
//     this.edad = edad
// }
// Persona.prototype.pais = "Peru" 
// Persona.prototype.comer = function(){
//     console.log("ñam ñam")
// }
// var fabrizio = new Persona("fabrizio","condori",20)
// for ( propiedad in fabrizio) {
//     if (fabrizio.hasOwnProperty(propiedad)) {
//         console.log(propiedad)
//     }
// }




// function Sumar(){
//     console.log(arguments)
//     var numeros = Array.prototype.slice.call(arguments)
//     var suma = 0
//     for(var iterador=0;iterador<numeros.length;iterador++){
//         suma+=numeros[iterador]
//     }
//     return suma
// }
// console.log(Sumar(1,2,3,4,5,6,7))


// for_principal:
// for (var index = 0; index < 5; index++) {
//     console.log(index)
//     console.log("p")
//     for_secundario:
//     for (var i = 0; i < 5; i++) {
//         console.log(i)
//         console.log("s")
//         for (let j = 0; j < 5; j++) {
//             console.log(j)
//             console.log("t")
//             if(j===2)   continue for_secundario
//         }
//     }
// }

// setTimeout(function(){
//     console.log("Me ejecute despues de 3 seg.")
// }, 3000);

// var segundo = 0
// var intervalo = setInterval(function () {
//     segundo++
//     console.log(segundo)
// }, 1000);
// function pararIntervalo(){
//     clearInterval(intervalo)
// }
// function segundos() {
//     segundo++
//     console.log(segundo)
// }
// var intervalo = setInterval(segundos,1000)

// function ejecutar(){
//     console.log("me ejecuté")
//     console.log(arguments)
// }
// var boton = document.getElementById("btn")
// console.log(boton)
// boton.addEventListener("click",ejecutar)

// var cantidad = 0
// function ejecutar(){
//     console.log("Soy el título",cantidad)
//     cantidad++
// }
// var accionTitulo = document.getElementById("title")
// accionTitulo.addEventListener("contextmenu",ejecutar)
// var campoTexto = document.getElementById("campo")
// campoTexto.addEventListener("keyup",ejecutar)

// document.onmousedown = function(arg){
//     if(arg.button===2){
//         alert("click bloqueado")
//         return;
//     }
//     console.log(arg)
// }
// document.onmouseup = function(){
//     var texto = window.getSelection().toString()
//     console.log(texto)
// }
// var a=12
// function validar(){
//     var nombre = document.getElementById("txtNombre").value
//     var apellido = document.getElementById("txtApellido").value

//     if(nombre.length < 1 || apellido.length <1){
//         return false
//     }
//     return true
// }
// function getParamURL(name) {
//     return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
//   }
// console.log(getParamURL("txtNombre"))



'use strict';
// var private = 23
// console.log(23)
// var a = 010; 
// console.log(a)
// var persona = {
//     a: "as",
//     b:1,
//     a:23,
//     b : function(){
//         return "asdasd"
//     }
// }
// var x = 23
// function funcion(a,b,a){
//     console.log(a,b)
// }
// var undefined = 12  
// console.log(undefined)
// funcion(1,2,3)
// console.log(persona.a)
// x = 123
// console.log(x)
// delete Object.prototype

if(4>2){
    function funcion(){
        console.log("asdasd")
    }
}else{
    function funcion(){
        console.log("hahhahaha")
    }
}
funcion()