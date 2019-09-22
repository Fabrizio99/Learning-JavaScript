# Ciclos
## for
Nos permite ejecutar el mismo código pero con diferentes valores.  
- Enunciado 1 = let index=0  
- Enunciado 2 = index < 100  
- Enunciado 3 = index++  
```JavaScript
for (let index = 0; index < 100; index++) {
    console.log(index);
}
```
Proceso:  
El enunciado 1 se ejecutara una sola vez antes de la ejecución del bloque de código que esta dentro del scope (las llaves). El enunciado 2 es la condición del bloque de código, quiere decir, que se realizara lo que esta dentro del scope siempre y cuando la variables "index" sea menor a 100. Por ultimo, el enunciado 3 es lo que se ejecuta cada vez de haber ejecutado el bloque de código.  
En el ejemplo anterior, la variable index comienza siendo 0, cada vez que se ejecute lo que esta dentro del scope (console.log(i)) se ejecutara el enunciado 3 que es aumentar el valor de index en 1 y por último se evalúa la condición (si el valor de index es menor a 100, se seguira ejecutando).

Si se desea romper un bucle o saltar, lo podemos hacer con los enunciados ```break``` & ```continue```.

## while
Este loop va a realizar el bloque de código siempre y cuando la condición especificada sea verdadera.
```JavaScript
//SINTAXIS
while(condicion){
    //bloque de código a ejecutarse
}

//Ejemplo
let contador=0
while(contador<10){
    console.log(contador)
    contador++
}
```
En el ejemplo anterior, primero se evalúa la condición, como contador es 0 entonces se ejecutará el bloque (imprimir el valor de contador y aumentar contador en 1). Pero porque aumentar el contador en uno cada vez que se ejecute el bloque de código? Debido a que cuando se vuelva a evaluar la condición siempre contador será 0 y será un bucle infinito, entonces se debe aumentar el valor de contador ya que cada vez que se ejecute el bloque de código y se vuelva a evaluar la condición llegará a un punto que es valor será mayor o igual a 10 y se terminará el bucle.

## do while
Este loop es parecido al while solo con la diferencia que el bloque de código se va a ejecutar por lo menos una vez, aunque la condición al comienzo sea falso.
```JavaScript
let a=0
do{
    console.log(a)
    a++
}while(a!=0)
```
Al comienzo la variable a era igual a 0, pero como será evaluado en un loop do while, se ejecutará el bloque de código primero (si fuera un while no se ejecutaría ya que primero se evaluaría la condición y este sería falsa) y luego se evaluará la condición. Este sería un bucle infinito ya que siempre el valor será distinto de 0.