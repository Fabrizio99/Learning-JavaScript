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
}
let estudiante1 = new Estudiante('Fabrizio','avbar357159@gmail.com')
let estudiante2 = new Estudiante('Juan','faracogu@gmail.com')
```
Se creo la funcion constructor, que en este caso tendra el nombre de la clase (Estudiante), ya que no usaremos la palabra `class`, este contructor representa nuestra clase Estudiante. Luego le agregamos los atributos y los métodos.  

Algo que debemos saber es que todo objeto hereda propiedades y métodos de un prototipo, es decir, JavaScript esta basado en prototipos.
Respecto a herencia, un objeto posee un prototipo, y este prototipo a su vez tiene su prototipo, y así sucesivamente. `Object.prototype` esta arriba de la cadena de herencia de prototipos.
### Prototipos
Todo objeto hereda propiedades y métodos de un prototipo (Array hereda de `Array.prototype`o un objeto Carro, esta hereda de `Carro.prototype`) y todos estos heredan el prototipo `Object.prototype.

Con esto de los prototipos, podemos agregar nuevas propiedades y/o métodos a un objeto constructor o a todos los objetos existentes de un tipo dado.
- Agregar nuevas propiedades a constructores de objetos.
    ```JavaScript
    function Estudiante(nombre,correo){
        this.nombre = nombre
        this.correo = correo
        this.conectado = false
    }
    Estudiante.prototype.idioma = 'español'
    let estudiante1 = new Estudiante('Fabrizio','avbar357159@gmail.com')
    console.log(Estudiante.idioma)
    ```

- Agregar nuevas métodos a constructores de objetos.
    ```JavaScript
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
    ```
Nota: es recomendable modificar solo tus propios prototipos, no los objetos que vienen incorporados dentro de JavaScript.
### Herencia con Prototipos
Para poder entender herencia con Métodos, primero entendamos los siguientes conceptos:
- `call()`  
    Método predefinido en JavaScript, que nos permite nos permite como pasar como parámetro a un objeto, pudiendo ser este método perteneciente a otro objeto.
    ```JavaScript
    let carro = {
        conducir : function(){
            return `El carro de marca ${this.marca} esta conduciendo`
        }
    }
    let carro1 = {
        marca : 'Audi',
        año : '2019'
    }
    console.log(carro.conducir.call(carro1))
    ```
    Tambien podemos pasale argumentos.
    ```JavaScript
    let carro = {
        conducir : function(color){
            return `El carro de marca ${this.marca} esta conduciendo, de color ${color}`
        }
    }
    let carro1 = {
        marca : 'Audi',
        año : '2019'
    }
    console.log(carro.conducir.call(carro1,'rojo'))
    ```
- `apply()`
    Tiene la misma función que el método `call()`, la única diferencia es que al recibir argumentos, este las acepta en un array, no como call() que las acepta por separado.
    ```JavaScript
    let carro = {
        conducir : function(color,ciudad){
            return `El carro de marca ${this.marca} esta conduciendo, de color ${color} en la ciudad de ${ciudad}`
        }
    }
    let carro1 = {
        marca : 'Audi',
        año : '2019'
    }
    console.log(carro.conducir.apply(carro1,['rojo','Lima']))
    ```
Para poder entender la herencia en prototipos, veamos primero el ejemplo.
```JavaScript
function User(nombre, edad){
    this.nombre = nombre
    this.edad = edad
}
User.prototype.conectar = function(){
    return `${this.nombre} se ha conectado`
}
function Persona(...args){
    User.apply(this,args)
}
Persona.prototype = Object.create(User.prototype)
Persona.prototype.deleteUser = function(){
    
}
let persona1 = new Persona('Fabrizio',15)
console.log(persona1)
let user1 = new User('Pedro',10)
console.log(user1)
```
Dirán, pero que carajos es esto, creanme que a mi me costo tambien entenderlo, pero aqui vamos:
- Creamos una funcion constructor Administrador, esta haremos que herede de User.
- El detalle es que no podemos usar la palabra reservada `extends`, ya que lo estamos haciendo en base a prototipos.
    Creo que la parte más complicada es esta:
    - Primero pensemos que al instanciar una clase, tenemos que pasarle los parámetros a la funcion constructor, en este caso en la función constructor Administrador, todos los datos que se reciban se almacenaran en `...args` (este es un parámetro rest, nos permite almacenar una cantidad indenfinida de datos en un array), pero como le pasamos esos datos almacenados a los atributos de Administado? como los atributos que tiene Administrador son los mismos que User, entonces haremos que cada objeto que se cree tomará forma de la funcion constructor User, pasandole como argumentos el parametro rest `args`. Practicamente todo lo explicado, se realiza en esta linea de código.
    ```JavaScript
    User.apply(this,args)
    ```
- Ahora si queremos heredar los método de un prototipo, tenemos que indicar que el prototipo de Administrador va a ser un objeto que se va a crear y que este nuevo objeto este basado en `User.prototype`. Esto es lo que hace:
    ```JavaScript
    Administrador.prototype = Object.create(User.prototype)
    ```
