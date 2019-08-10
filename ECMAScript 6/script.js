// let nombre = 123
// if(3 === 3){
//     let nombre = "persona"
// }
// // let nombre = true
// console.log(nombre)

// let persona = ""
// function funcion(){
//     let persona = "fabrizio"
//     return persona
// }
// console.log(persona)
// console.log(funcion())

// const PI = 3.1415
// PI = 20


// const persona = {
//     nombre : "fabrizio",
//     edad : 20
// }
// persona.nombre = "Juan"
// console.log(persona)
// persona.imprimir = function(){
//     return `Soy ${this.nombre} y tengo ${this.edad} años` 
// }
// console.log(persona.imprimir())

// const arreglo = [1,2,3]
// console.log(arreglo)
// arreglo.push(5)
// console.log(arreglo)

// let i=20
// for(let i = 0;i<10;i++){
//     console.log(i)
// }
// console.log("f",i)



// let i = 0
// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }
// console.log("f",i)

// function hey() {
// console.log('hey ' + myName);
// };
// var myName;
// hey();
// myName = 'Sunil';


// var arreglo = []

// for (let i = 0; i < 5; i++) {
//     arreglo.push(function () {
//         console.log(i)
//     })
// }
// arreglo.forEach(function(func){
//   func()  
// })

// repeat()
// let cadena = "fabrizio"
// console.log(cadena.repeat(1))

// ejercicio de listar nombres
// let nombre = ["Fabrizio","Alvaro","Juan","Hermenegildo"]
// let telefono = ["112233","445566","778899","123456"]
// function listarDatos(){
//     let longitud = 1+cadenaMasLargo(nombre)
//     for (const key in nombre) {
//         let espaciado = longitud-nombre[key].length
//         console.log(nombre[key]+" ".repeat(espaciado)+"|"+telefono[key])
//     }
// }
// function listarDatos(){
//     let longitud = 1+cadenaMasLargo(nombre)
//     for (const key in nombre) {
//         console.log(nombre[key].padEnd(longitud)+"|"+telefono[key])
//     }
// }
// function cadenaMasLargo(object){
//     let longitud=0
//     for (const iterator of object) {
//         if(iterator.length>longitud)    longitud = iterator.length
//     }
//     return longitud
// }
// listarDatos()

// let nombre = 'Juanito'
// let apellido = 'Alcachofa'
// function nombreCompleto(nom,apel){
//     return `${nom} ${apel}`
// }
// console.log(`Mi nombre completo es ${nombre} ${apellido} y tengo ${13+1} años`)
// console.log(`Mi nombre completo es ${nombreCompleto(nombre,apellido)} y tengo ${13+1} años`)

// tag con templates
// function etiqueta(str,...args){
//     let cadena=""
//     str.forEach((elemento,indice)=>cadena+=`${elemento}<span class="highlight">${args[indice]||''}</span>`)
//     return cadena
// }
// let nombre = "Fabrizio"
// let apellido = "Condori"
// document.body.innerHTML =  etiqueta`hola soy un mensaje de ${nombre} ${apellido}`

//String.raw es una funcion de string templates que permite obtener un string crudo, quiere decir, el texto original y no interpretado

// let mensaje = `Hola\nmundo\\`
// console.log(mensaje)
// console.log(String.raw`Hola\nmundo\\`)

// function etiqueta(str,...args){
//     let cadena = ''
//     str.forEach(function(element, index){
//         return cadena+=`${element} "${args[index] || ''}"`
//     });
//     return cadena
// }
// let pais = "Perú"
// let capital = "Lima"
// document.body.innerHTML =  etiqueta`La capital de ${pais} es ${capital}`
// console.log(etiqueta`La capital de ${pais} es ${capital}`)

// function funcion(nombre) {
//     // nombre = nombre || 'sin datos'
//     nombre = (typeof nombre!=="undefined")? nombre : 'sin datos'
//     console.log(nombre)
// }
// funcion('asd')



//rest
// los datos pasados como argumentos se integran todos en un arreglo
//los parámetros rest no pueden ir al final y solo se declaran una vez
// function registroAlumnos(arreglo,...alumnos){
//     alumnos.forEach(function(alumno){
//         arreglo.push(alumno)
//     })
//     return arreglo
// }
// let alumno = registroAlumnos([],'Fabrizio','Jose','Fernando')
// console.log(alumno)

// spread operator
// todos los datos de un arreglo se expandan, quiere decir, genera una lista de datos a partir de un array
// let arreglo = [1,2,5,4]
// let x = Math.max.apply(null,arreglo)
// let y = Math.max(...arreglo)
// console.log(x)
// console.log(y)
// rest es lo contrario a spread, mientras que la primera genera un array a partir de unos elementos,
// el segundo genera una lista de datos a partir de una array.

// Ejercicio usando spread y rest operator
// function quitarEspacios(...cadenas){
//     for (let index = 0; index < cadenas.length; index++) {
//         cadenas[index] = cadenas[index].trim()
//     }
//     return cadenas
// }
// console.log(quitarEspacios('   a   ','b','   c'))
// let cadenas = ['   d   ','e','   f','g     ']
// console.log(quitarEspacios(...cadenas))

// asginando las propiedades de un objeto a otro sin referencia
// let persona1 = {
//     nombre:'Fabrizio',
//     edad:20
// }
// let persona2 = {...persona1}
// persona2.nombre='Juan'
// let persona3 = persona1
// console.log(persona1===persona2)
// console.log(persona1===persona3)
// añadir propiedades a objetos a partir de otros objetos
// let persona1={
//     nombre: 'Fabrizio',
//     edad: 20,
//     direccion: 'Villa el Salvador',
//     pais: 'Perú'
// }
// let persona2 = {
//     nombre: 'Juan',
//     edad: 23
// }
// persona2 = {
//     ...persona1,
//     ...persona2
// }
// console.log(persona1)
// console.log(persona2)

// function Persona(nombre){
//     if(typeof new.target !== "undefined"){
//         this.nombre = nombre
//     }else{
//         throw new Error('Esta funcion, debe ser utilizada con el new')
//     }
// }
// var persona = new Persona('Fabrizio')
// var persona2 = Persona('Fabrizio')

// const result = (a)=>(b)=>b?result(a+b):a;
// const result1 = function (a) {
//     return function(b){
//         if(b){
//             return result1(a+b)
//         }
//         return a}
// }
// res = result1(1)(2)(3)(4)()
// console.log(res)

// const miFuncion1 = valor=>this
// const miFuncion2 = function(valor){
//     return this
// }
// console.log(miFuncion1(1,2,3))
// console.log(miFuncion2(1,2,3))

// let funcion1 = function (valor) {
//     return valor
// }
// let funcion2 = valor => valor
// console.log(funcion1(1))
// console.log(funcion2(11))
// let saludar1 = function () {
//     return 'Hola'
// }
// let saludar2 = () => 'Hola'
// console.log(saludar1())
// console.log(saludar2())

// var a1 = function anonima1(){
//     return 'mensaje1'
// }()
// let a2 = (()=>'mensaje 2')()
// console.log(a1)
// console.log(a2)

// const arreglo = [1,2,3]
// arreglo.push(4)
// console.log(arreglo)
// arreglo[2]=22
// console.log(arreglo)
// // [1, 2, 22, 4]
// arreglo.sort((a,b)=>a-b)
// console.log(arreglo)

// const p1 = {
//     nombre : 'Fabrizio',
//     edad   : 20
// }
// const p2 = {
//     nombre : 'Juan',
//     edad   : 12
// }
// const p3 = {
//     nombre : 'Xiomara',
//     edad   : 15
// }
// const p4 = {
//     nombre : 'Axel',
//     edad   : 32
// }
// const arreglo = [p1,p2,p3,p4]
// console.table(arreglo)
// arreglo.sort((a,b)=>{
//     if(a.nombre>b.nombre)   return 1
//     if(a.nombre<b.nombre)   return -1
//     return 0
// })
// console.table(arreglo)

// function crearPersona(nombre,apellido,edad){
//     return {
//         nombre,
//         apellido,
//         edad,
//         getNombre(){
//             console.log(`Soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`)
//         }
//     }
// }
// const persona1 = crearPersona('Fabrizio','Condori',20)
// console.log(persona1)
// persona1.getNombre()

// const persona = {}
// console.log(persona)
// let dato = "nombre"
// persona['primer '+dato]='Fabrizio'
// persona['segundo '+dato]='Raul'
// console.log(persona)
// dato = 'apellido'
// persona['primer '+dato]='Condori'
// persona['segundo '+dato]='Guzman'
// console.log(persona)
// console.log(persona['primer apellido'])

// const objeto = {
//     nombre : 'Fabrizio',
//     apellido : 'Condori',
//     edad : 20
// }
// ob={}
// // Object.key retorna un array con todos los nombre de las propiedades como elemento.
// Object.keys(objeto).forEach(element=>{
//     ob[element] = objeto[element]
//     console.log(`ob.${element} :`,ob[element])
// })

// const receptor={
//     pais : 'Perú'
// }
// const emisor = {
//     nombre : 'Fabrizio',
//     apellido : 'Condori',
//     edad : 20
// }
// const proceso = Object.assign(receptor,emisor)
// console.log(receptor)
// console.log(emisor)
// console.log(proceso)
// proceso.nombre = 'Raul'
// emisor.nombre = 'Juan'
// console.log(receptor)
// console.log(emisor)
// console.log(proceso)

// const gato = {
//     sonido(){
//         console.log('Miau!')
//     },
//     chillido(){
//         console.log('Miauuuuuuuu!')
//     }
// }
// let angora = Object.create(gato)
// console.log(angora.__proto__)
// console.log(Object.getPrototypeOf(angora))
// const perro = {
//     sonido(){
//         console.log('Guauuu')
//     }
// }
// // angora.__proto__ = perro
// Object.setPrototypeOf(angora,perro)
// // console.log(angora.__proto__)
// console.log(Object.getPrototypeOf(angora))
// const persona = {
//     saludar(){
//         return 'Hola'
//     }
// }
// const amigo = {
//     saludar(){
//         return super.saludar()+", que tal?"
//     }
// }
// Object.setPrototypeOf(amigo,persona)
    // console.log(persona.saludar())
// console.log(amigo.saludar())



// desestructuracion de objetos
// const data = {
//     name     : 'Fabrizio',
//     lastName : 'Condori',
//     mail     : 'avbar357159@gmail.com',
//     facebook : 'aaas',
//     // twitter  : 'qqqqqq',
//     premium  : true
// }
// let {lastName,name:nombre,mail,premium:pago,twitter:twit='aaaaa'}=data
// console.log(nombre)
// console.log(mail)
// console.log(lastName)
// console.log(pago)
// console.log(twit)

// const nodo = {
//     nodo1 : 1,
//     nodo2 : {
//         nodo3:12,
//         nodo4:{
//             nodo5:23
//         }
//     }
// }
// const {nodo2:{nodo3,nodo4:{nodo6:subsubnodo=11111}}} = nodo
// console.log(subsubnodo)


// desestructuracion de arreglos
// const listaFrutas = ['platano','pera','manzana']
// let [fruta1,fruta2,fruta3] = listaFrutas
// console.log(fruta1)
// console.log(fruta2)
// console.log(fruta3)
// let [,f2]= listaFrutas
// console.log(f2)

// let x=1;
// let y=2;
// console.log(x);
// console.log(y);
// [x,y] = [y,x];
// console.log(x);
// console.log(y);
// let colores = ['rojo',['amarillo','verde','negro'],'azul','morado']
// let [color1,[,color22]] = colores
// console.log(color1)
// console.log(color22)
// let listColors = ['rojo','amarillo','verde','negro','azul','morado']
// let [mainColor,...secondaryColors]=listColors
// console.log(mainColor)
// console.log(secondaryColors)



// Symbol

// const s1 = Symbol('simbolo 1')
// const s2 = Symbol('simbolo 2')
// const s3 = Symbol('simbolo 2')
// console.log(s2==s3)
// console.log(s2===s3)
// console.log(Object.is(s2,s3))

// const primerNombre = Symbol('primer nombre')
// const persona = {
// }
// persona[primerNombre] = 'Fabrizio'
// console.log(persona[primerNombre])

// Symbol.for - Symbol.keyFor
// const userID = Symbol.for('userID')
// const objeto = {}
// objeto[userID] = '123'
// console.log(objeto[userID])
// console.log(userID)
// const userID2 = Symbol.for('userID')
// console.log(userID == userID2)
// console.log(userID === userID2)
// console.log(Object.is(userID,userID2))
// console.log(objeto[userID2])
// console.log(userID2)
// const id = Symbol.for('ID unico')
// console.log(Symbol.keyFor(id))
// const id2 = Symbol.for(Symbol.keyFor(id))

// const activo = Symbol.for('Activo')
// const persona = {
//     [id] : '123',
//     [activo] : true,
//     nombre : 'Fabrizio',
//     apellido : 'Condori'
// }
// for (const key in persona) {
//         console.log(key)
// }
// const listaSimbolos = Object.getOwnPropertySymbols(persona)
// console.log(listaSimbolos)
// for (const key in listaSimbolos) {
//     console.log(listaSimbolos[key],Symbol.keyFor(listaSimbolos[key] ))
// }


// let id = Symbol('id')
// let id1 = Symbol('id')
// console.log(id1.toString())
// console.log(id1.description)
// const persona = {
//     [id] : 123
// }
// const p2 = Object.assign({},persona)
// console.log(p2)
// for (const key in p2) {
//     console.log(key)
// }
// persona['1']=12
// console.log(persona[1+'1'])


// let id = Symbol.for('id')
// console.log(Symbol.keyFor(id))

// let items = new Set()
// items.add(1)
// items.add(2)
// items.add(3)
// items.add(2)
// items.add('1')
// console.log(items)
// console.log(items.size)
// let items2 = new Set([1,2,3,'2',5,4,7])
// console.log(items2)
// console.log(items2.size)
// console.log(items2.has(1))
// console.log(items2.has(6))

// let item = new Set([1,2,3,4])
// console.log(item)
// item.delete(2)
// console.log(item)
// item.delete(2)
// console.log(item)
// item.clear()
// console.log(item)

// item.forEach((key,value,set)=>console.log(key,value,set));

// const arregloItems = [...item]
// console.log(arregloItems)


// let items = [1,2,3,4,1,3,2,4,5,1]
// console.log(items)
// function eliminarDuplicados(arreglo){
//     return [...new Set(arreglo)]
// }
// items = eliminarDuplicados(items)
// console.log(items)

// let weakSet = new WeakSet()
// weakSet.add({as:12})
// console.log(weakSet)
// console.log(weakSet.size)

// let set = new Set('asdas')
// console.log(set)

// let items = new Set([1,2,4,5,3,5])
// function eliminarDuplicados(arreglo){
//     return [...new Set(arreglo)]
// }
// let item = new Set()
// item.add(1)
// item.add(2)
// item.add(5)
// item.add(3)
// let entradas = item.entries()
// console.log(entradas)

// let mapa = new Map()
// mapa.set('nombre','Fabrizio')
// mapa.set('apellido','Condori')
// mapa.set("edad")
// mapa.set()
// console.log(mapa)
// console.log(mapa.size)
// console.log(mapa.get("nombre"))
// console.log(mapa.has('nombre'))
// console.log(mapa.delete('nombre'))
// console.log(mapa.has('nombre'))
// console.log(mapa.get('nombre'))
// console.log(mapa)
// mapa.clear()
// console.log(mapa)

// let items = new Set('asdas')
// console.log(items)
let mapa = new Map([['a',1],['b',2]])

mapa.forEach((value,key,map) => {
    console.log(`${key}:${value}`)
});

for (const elements of mapa) {
    console.log(elements[0]+' -> '+elements[1])
}
// let mapa = new Map([['pais','Peru'],['capital','Lima']])
// console.log(mapa.get('capital'))
// console.log(mapa.has('pais'))
// console.log(mapa.has('idioma'))
// mapa.delete('capital')
// console.log(mapa.get('capital'))
// mapa.clear()
// console.log(mapa)