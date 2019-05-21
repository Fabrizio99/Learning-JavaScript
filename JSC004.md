# FUNCIONES
Es un bloque de código ,reutilizable, que nos permite realizar determinada tarea y es ejecutado cuando es invocado.
Funciona de la siguiente manera:
entrada => función => salida  

## Funciones de declaración
Tienen la forma:
```JavaScript
funcion nombreFuncion(parametro){
    //bloque de código
}

nombreFuncion(valor) //manera de invocar una función de declaración
```
## Funciones de expresión
Tienen la forma
```JavaScript
var suma=function(a,b){
    return a+b
}

suma(1,2) //manera de invocar una función de expresión
```
Pero esta en desuso.
## F. de declaración VS F. de expresión
La diferencia entre estas funciones es cómo se interpreta cada una de ellas, ya que la F. de Declaración es tomada como una acción, en cambio una F. de Expresión, una variable toma como *valor* una función.  

Aquí la explicación, una F. de declaración es una acción (almecenada en memoria) que es ejecutada en el momento que es invocada, quiere decir es una *acción*, mas no es un valor en concreto.  

Una F. de Expresión (tomando como ejemplo al de la definición), la función es un valor (como si fuera un texto o un número) que esta almacenado en la varibale suma.

## Funciones de flecha (Arrow functions)
Es una nueva manera de definir funciones, es recomendada desde ES6
```JavaScript
//Declaración
const nombre_variable=(parametro1,parametro2)=>{
    //instrucciones
    return valor
}
//si solo requiere un solo parámetro, no son necesarios los paréntesis y si el bloque de instrucciones es de una sola línea no se necesitan las llaves
const n_v=parametro=>valor_retorno
//Ejemplo
const cuadrado=numero=>numero*numero
//Pero si son necesarios los paréntesis, cuando no se reciban parámetros.
```
## Parámetros
Variables locales que se definen en la declaración de la función
```JavaScript
function(parametro1,parametro2){
    //instrucciones
}
```
Podemos asignarles valores por defecto a los parámetros, ya que si no se le brinda al momento de ejecutarse, se usará ese valor.
```JavaScript
function multiplicar(parametro1,parametro2=2){
    return parametro1*parametro2
}
console.log(multiplicar(2,3))
console.log(multiplicar(5))
```
## Argumentos
Son los valores asignados a los parámetros al momento de ejecutar la función
- Si existen más argumentos que los parámetros de la función, los adicionales se ignora.
- Si hay menos argumentos que parámetros tendrán el valor undefined, a menos que tengan un valor por defecto.
- Parámetro Rest: permite representar un número indefinido de argumentos como un arreglo.
```JavaScript
const suma=(...numeros)=>{
    let result=0
    for (let index = 0; index < numeros.length; index++) {
        result+=numeros[index]
    }
    console.log(result)
}
suma(1,2,3)
suma(1,2,3,4,5)
```
## Las funciones son cuidadanos de primera clase
¿Qué quiere decir ciudadano de primera clase?  
Se usa el término ciudadanos de primera clase, o *First-cass citizens*, para hacer referencia a un elemento del lenguaje que posee la mayor cantidad de privilegios dentro de este lenguaje (en este caso Javascript).
Algunas carácterísticas de cuidadanos de primera clase, que se cumplen en las funciones de JavaScript.
- Pueden ser almacenadas en variables o constantes.
    ```JavaScript
    const c=console.log //podemos ver que la variable "c", posee como valor la función console.log
    c('Hola')
    ```
    Vemos que 'c' contiene las instrucciones de la funcion console.log, no se le pone parentesis ya que al hacerlo, hara que este se ejecute y 'c' ya no es más una función sino un valor.
    
- Pueden ser pasadas como argumentos de otra función
```JavaScript
const suma=(a,b)=>a+b   //vemos una función suma 
console.log(suma(suma(5,4),1))  //vemos que en la función suma, tiene como parámetro una función suma. Primero se ejecutará la que esta como parámetro y el resultado de ésta será usada como parámetro para la función externa
```
- Pueden ser retornadas por otra función
```JavaScript
//tenemos como retorno una función que va a retornar la suma del valor del parámetro con el parámetro de la función que está como retorno
const suma=function(a){
    return function(b){
        return a+b
    }
}
console.log(suma(2))    //si se ejecuta, saldra como resultado la estructura de la funcion de adentro, debido a que este "2" que está como paréntesis, solo ejecuta la primera función pero no la de adentro, se tiene que indicar el valor de la función de adentro para que se ejecute esta
console.log(suma(2)(3))
```
- Puede tener métodos o propiedades (POO).
## Tipos de funciones
- Funciones puras:  
    No causa algún efecto secundario, quiere decir, no cambia el valor de las variables tomadas como parámetros.
    ```JavaScript
    //FUNCION NO PURA
    let name='Fabrizio'
    console.log(name)
    const greet=()=>{
        name='Hola '+name}
    greet()
    console.log(name)
    //Vemos que el valor de name cambio al momento de ejecutar a la función

    //FUNCION PURA
    let name='Fabrizio'
    console.log(name)
    const greet=()=>`Hola ${name}`
    greet()
    console.log(name)
    //el valor de name no cambia, aunque se pase como parámetro a la función
    ```
- Funciones Autoinvocadas en forma de Expresión  
    También llamadas *IIFE (Immediately Invoked Function Expression)*, permite crear una función en forma de expresión y se ejecuta ni bien se crea la función.
    ```JavaScript
    var suma=function(a,b){
        return a+b
    }(1,2)//se crea la función y alli mismo es invocado por los valores (1,2), por lo tanto el valor de suma es 3
    console.log(suma)
    ```
    Este tipo de funciones nos permite crear un nuevo contexto, aislando todas las variables y funciones que puedan estar definidas dentro de ellas, evitando crear variables globales que puedan afectar al funcionamiento del programa.

    Podemos escribir estas funciones en forma de expresion sin depender de una variable en concreto, de la siguiente manera.
    ```JavaScript
    (function(){
        return 'hola'
    }())
    ```
    De esta manera creamos una funcion IIFE sin la necesidad de depender de una variable, se coloca paréntesis para que JS entienda que es una expresión, ya que si no ponemos los paréntesis, JS pensará que estamos definiendo una función de declaración y nos lanzará un error ya que una f. de declaración debe tener una nombre.

- Funciones nombradas y anónimas  
    Una funcion nombrada, es aquella que posee un nombre (Ej. una f. de declaración) y un anónima, en cambio, es aquella que no posee un nombre, puede ser usado como parámetro en otra función.

## Scope
El scope determina la accesibilidad de las variables.
Existen dos tipos de scope:
- Local scope.
- Global scope.

Cada función en JS crea un nuevo scope, las variables creadas dentro de una función no son accesible fuera de la misma función.
### Variables de JavaScript locales
Las variables declaradas dentro de una función , se convierten en *locales* a la función.
Las variables locales tienen un *Function scope*, quiere decir, solo son accesibles dentro de la función.
```JavaScript
function nombre() {
    var saludo='hola'
    console.log(saludo)
}
console.log(saludo)

//Si ejecutamos este bloque de código, veremos que se produce un error, con el siguiente mensaje en la consola
Uncaught ReferenceError: saludo is not defined
at script2.js:88
```
Este error sucede ya que hemos querido acceder a una variable que esta definida solo dentro de la función, ya que fuera de esta no existe, por eso el error que dice *saludo no esta definido*.  
Debido a esto, podriamos tener variables con el MISMO nombre pero en DISTINTAS funciones y no habría problema alguno.  
Las variables locales son creadas cuando empieza la función y eliminadas cuando se completa la función.

### Variables de JavaScript globales
Una variable que es declarada fuera de una función, se convierte en global. Una variable global posee un alcance global (global scope), todas funciones y el codigo en general de la pagina web pueden acceder a ellas.
```JavaScript
var saludo='hola'
function nombre() {
    console.log(saludo)
}
console.log(saludo)
```
Tanto dentro como fuera podemos usar esta variable y si vemos en la consola del navegador, vemos que no ocurre alguna error, ya que esta variable es global por el hecho de estar declarado fuera de una función.

### Automáticamente global
Si asignamos un valor a una variable que no ha sido declarado, automaticamente se convertira en una variable global.
```JavaScript
bloque()
function bloque() {
    saludo='hola';
    console.log(saludo)
}
console.log(saludo)
```
Como podemos ver, podemos acceder a la variable saludo fuera de la función, ya que ha sido asignado un valor sin declararlo, por ende se vuelve una variable global. Obviamente, se tiene que invocar la función para que reconozca a esta variable y la tengo un scope global.
