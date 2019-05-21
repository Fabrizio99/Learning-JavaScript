# POO JavaScript
La primera idea es saber que al usar este paradigma, todo es un objeto.  
## Objeto: 
Un objeto es una abstraccion del mundo real, posee atributos y métodos.
### Atributos
- Caracteristicas del objeto.
- Se refieren el estadoa actual.
- Son modificables y accesibles.
### Métodos
- Acciones del objeto.
- Se refieren el estadoa actual.
- Son modificables y accesibles.
Aunque la sintaxis es muy parecida a la de una función, la diferencia es que los métodos son exclusivos de una clase no como las funciones que pueden ser utilizadas de forma más general.

### Objeto Literal
```JavaScript
const persona = {
    nombre:'Fabrizio',
    edad:20
}
```
Al crear un objeto literal, estamos realizando lo que es el encapsulamiento ya que los atributos y metodos lo estamos encapsulando en un solo objeto
Se puede visualizar que se declaro al objeto con `const`, pero lo último no solo se usa para variables que no pueden cambiar su valor?
En verdad `const` no crea variables inmutables, sino crea un enlace inmutable, creando un enlace a un objeto en particular, en sencillas palabras, no nos permitira reasignar los valores de una variable.
## Prototipos
Es la base de toda la programacion en JS, ya que todo objeto proviene a partir de un prototipo.
## this
A partir de ES6, su alcanze se limita al objeto declarado, si fuera de manera global, el `this` seria igual al objeto windows.

## Clases:
Introducido en ECMAScritp 2015, son plantillas que nos permitiran crear objetos a partir de ella.
```JavaScript
class Usuario{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
}
let usuario1 = new Usuario('Fabrizio','Condori',12)
console.log(usuario1)
let usuario2 = new Usuario('Pedro','Rodriguez',15)
console.log(usuario2)
```
En el ejemplo anterior, se creo la clase Usuario, y a partir de ella creamos dos objetos (usuario1 y usuario2).  
La palabra reservada `new` realiza 3 acciones:
- crea el nuevo objeto (vacío).
- establece el valor de `this` para que sea el objeto vacío que hemos creado, quiere decir,que podemos ahora podemos usar `this` en el constructor haciendo referencia al nuevo objeto que hemos creado.
- llama al método Constructor.
### Constructor
El constructor es un método especial para crear e inicilizar un objeto creado con una clase y solo puede haber un método con ese nombre en una clase.

## Encadenamiento de Métodos (Method Chaining)
Nos permite mutar el mismo elemento llamando diferentes métodos a la vez.
```JavaScript
class Estudiante{
    constructor(nombre,correo){
        this.nombre = nombre
        this.correo = correo
        this.nota   = 0
    }
    conectar(){
        console.log(`${this.correo} se ha conectado.`)
    }
    desconectar(){
        console.log(`${this.correo} se ha desconectado.`)
    }
    actualizarNota(){
        this.nota++
        console.log(`${this.correo}, su nota es ${this.nota}`)
    }
}
let estudiante1 = new Estudiante('Fabrizio','avbar357159@gmail.com')
estudiante1.conectar().actualizarNota().actualizarNota().desconectar()
```
Vemos que al ejecutarlo, nos sale este error en la consola del navegador `TypeError: estudiante1.conectar(...) is undefined`. El detalle de usar los encadenamiento de métodos, es en cada método de la clase retornar un objeto, en este caso seria apropiado retornar el objeto mismo (colocar la palabra clave `this`).
```JavaScript
class Estudiante{
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
estudiante1.conectar().actualizarNota().actualizarNota().desconectar()
```
Si lo ejecutamos, veremos en la consola el resultado deseado.

## Herencia
Nos permite heredar los métodos y atributos de una clase.
## Funcionamiento del Constructor
Para crear una clase en JavaScript, usamos la palabra clave `class` para poder crearlos. Pero esta palabra clave fue introducido en ECMAScript 2015, `class` fue creado para poder emular como se comporta una clase, hacer una sintaxis más clara, es una mejora sintactica sobre la herencia basada en prototipos en JavaScript (*syntactic sugar*). 
Veremos como se crea una clase basandonos en la idea de prototipos, ya si usamos `class`, en verdad JavaScript esta usando el concepto de prototipos, como se dijo `class` es solo una mejora sintactica basada en la herencia de prototipos.
Así que veamos como funcionan las clases por dentro (*under the hood*).
```JavaScript
function Estudiante(nombre,correo){
    this.nombre = nombre
    this.correo = correo
    this.conectado = false
    this.conectar = function(){
        console.log(`${this.correo}, se ha conectado`)
    }
}
let estudiante1 = new Estudiante('Fabrizio','avbar357159@gmail.com')
let estudiante2 = new Estudiante('Juan','faracogu@gmail.com')
```
Se creo la funcion constructor, que en este caso tendra el nombre de la clase (Estudiante), ya que no usaremos la palabra `class`, este contructor representa nuestra clase Estudiante. Luego le agregamos los atributos y los métodos.