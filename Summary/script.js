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
//     for (let index = 0; index < arguments.length; index++) {
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

function funcion(a,b,c){
    console.log(b)
    console.log(arguments)
    arguments[1]=20
    console.log(b)
    console.log(arguments)
    var dato = arguments
    console.log(typeof arguments[0])
    dato[0] = 10
    console.log(a)
    console.log(arguments)
}
funcion(1,2,3)