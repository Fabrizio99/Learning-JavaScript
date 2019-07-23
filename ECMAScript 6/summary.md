# ECMAScript 6
## const
La palabra const no define un valor constante sino que hace referencia constante a un valor. Por eso no podemos cambiar valores primitivos pero si podemos cambiar los valores de objetos.
```JavaScript
// Ejemplo 1
const PI = 3.1415
PI = 20     // Assignment to constant variable.

// Ejemplo 2
const persona = {
    nombre : "fabrizio",
    edad : 20
}
persona.nombre = "Juan"
console.log(persona)
persona.imprimir = function(){
    return `Soy ${this.nombre} y tengo ${this.edad} años` 
}
console.log(persona.imprimir())

// Ejemplo 3
const arreglo = [1,2,3]
console.log(arreglo)
arreglo.push(5)
console.log(arreglo)
```
