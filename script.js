/*const persona = {
    nombre:'Fabrizio',
    edad:20
}
let v="nom"
let y="bre"
console.log(persona[`${v+y}`])
console.log(persona.type)
persona["sexo"]="masculino"
console.log(persona)
let propiedad1 = "numero romano"
const auto={
    [propiedad1] : 12
}
console.log(auto)*/
/*class Usuario{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    saludar(){
        return document.write(`
        <div>
            <p>Hola pendejo, soy ${this.nombre}</p>
        </div>
        `)
    }
}
let usuario1 = new Usuario('Fabrizio','Condori',12)
console.log(usuario1)
usuario1.saludar()
let usuario2 = new Usuario('Pedro',14,'Condori')
console.log(usuario2)*/

/*class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido=apellido
        this.edad=edad
    }
    saludar(){
        return console.log(`Hola, mi nombre es ${this.nombre}`)
    }
}
let persona1 = new Persona('Fabrizio','Condori',19)
console.log(persona1)
class Estudiante extends Persona{
    constructor(nombre, apellido, edad,codigo,anio){
        super(nombre,apellido,edad)
        this.codigo = codigo
        this.anio = anio
    }
}
let estudiante1 = new Estudiante('Fabrizio','Condori',19,'2016200055',4)
console.log(estudiante1)*/

/*class Forma{
    constructor(ancho,alto,color){
        this.color = color
        this.ancho = ancho
        this.alto = alto
    }
    dibujar(){
        return document.body.innerHTML = `
        <div style="width:${this.ancho}px; height:${this.alto}px; background:${this.color}">
        </div>
        `
    }
}
//let forma1 = new Forma(200,200,"red")
class Cuadrado extends Forma{
    constructor(lado,color){
        super(lado,lado,color)
    }
}
//let cuadrado1 = new Cuadrado(100,"blue")
class Circulo extends Forma{
    constructor(radio,color){
        super(2*radio,2*radio,color)
    }
}*/

/*const perro = {
    nombre : 'Peluza',
    edad : 10,
    raza : 'Chusca',
    comer(){
        return console.log(`${this.nombre} esta comiendo`)
    }
}*/


//encadenamiento de metodos (method chaining)
/*class Estudiante{
    constructor(nombre,correo){
        this.nombre = nombre
        this.correo = correo
        this.nota   = 0
    }
    conectar(){
        console.log(`${this.correo} se ha conectado.`)
        return this
    }
    desconectar(){
        console.log(`${this.correo} se ha desconectado.`)
        return this
    }
    actualizarNota(){
        this.nota++
        console.log(`${this.correo}, su nota es ${this.nota}`)
        return this
    }
}
let estudiante1 = new Estudiante('Fabrizio','avbar357159@gmail.com')
estudiante1.conectar().actualizarNota().actualizarNota().desconectar()*/

//prototipo - constructor
/*function Estudiante(nombre,correo){
    this.nombre = nombre
    this.correo = correo
    this.conectado = false
    this.conectar = function(){
        console.log(`${this.correo}, se ha conectado`)
    }
}
let estudiante1 = new Estudiante('Fabrizio','avbar357159@gmail.com')
let estudiante2 = new Estudiante('Juan','faracogu@gmail.com')*/

//prototipos
//añadiendo propiedades 
/*function Estudiante(nombre,correo){
    this.nombre = nombre
    this.correo = correo
    this.conectado = false
}
Estudiante.prototype.idioma = 'español'
let estudiante1 = new Estudiante('Fabrizio','avbar357159@gmail.com')
console.log(Estudiante.idioma)*/
//añadiendo métodos
function Estudiante(nombre,correo){
    this.nombre = nombre
    this.correo = correo
    this.conectado = false
}
Estudiante.prototype.conectar = function(){
    return `${this.correo} se ha conectado`
}
let estudiante1 = new Estudiante('Fabrizio','avbar357159@gmail.com')
console.log(estudiante1.conectar())