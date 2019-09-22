# ARRAYS
Usado para almacenar varios valores en una sola variable, estos valores pueden ser de distintos tipos de datos.
```JavaScript
//manera de crear un array
let array=[
    1,
    'string',
    true,
    {},
    [2,3,4]
]
//no es necesario colocar coma en el ultimo elemento ya que puede producir inconsistencia en los navegadores.
```
Para acceder a un elemento en específico de un aray, lo podemos hacer mediante su indice, que siempre comienza de 0. Por ejemplo
```JavaScript
array[0]
//result
1

array[1]
//result
"string"

array[2]
//result
true

array[3]
//result
{}

array[4]
//result
(3) [2, 3, 4]

array[5]
//result
undefined
```
Vemos que este array tiene 5 elementos, por lo cual su indice ira desde 0 a 4, si ponemos un indice fuera de este rango, la consola devolvera undefined.

## Desestructurar un array
En caso que queramos guardar cada uno de los elementos de un array en cada variable, podemos usar el desestructurador de la siguiente manera.
```JavaScript
let [s1,s2,s3,s4,s5]=array
//indicados que el primer valor del array se almacene en s1, el segundo valor en s2 y así sucesivamente.

//si imprimimos los valores en la consola
s1
//result
1

s2
//result
"string"

s3
//result
true

s4
//result
{}

s5
//result
(3) [2, 3, 4]
```
## Propiedades
Todo array posee la propiedad de length, que determina la longitud de ésta.
```JavaScript
array.length
//result
5
```
## Métodos
### Añadir y eliminar elementos
- Al final
    - .push(valor):  
        Agrega un valor al final del array, y retorna la nueva longitud del array.
        ```JavaScript
        arreglo     //array inicial
        (4) ["a", "b", "c", "d"]

        arreglo.push('e')   //Se añade el valor "e" al final y retorna la nueva longitud
        5

        arreglo
        (5) ["a", "b", "c", "d", "e"]
        //Imprimiendo al array "arreglo" vemos que tiene al final al valor "e"
        ```
    - .pop():  
        Elimina y retorna el último elemento del array.
        ```JavaScript
        arreglo     //array inicial
        (5) ["a", "b", "c", "d", "e"]

        arreglo.pop()   //eliminamos y se nos devuelve el último valor del arreglo
        "e"

        arreglo     //nuevos elementos del arreglo
        (4) ["a", "b", "c", "d"]
        ```
- Al inicio:  
    - .unshift(valor):  
        Agrega un valor al inicio del array, y retorna la nueva longitud del array.
        ```JavaScript
        arreglo     //array inicial
        (4) ["a", "b", "c", "d"]

        arreglo.unshift('0')    //añadimos el string "0" al inicio del array y nos devuelve la nueva longitud
        5
        arreglo     //nuevos elementos del array
        (5) ["0", "a", "b", "c", "d"]
        ```
    - .shift():  
        Elimina y retorna el primer elemento del array.
        ```JavaScript
        arreglo     //array inicial
        (5) ["0", "a", "b", "c", "d"]

        arreglo.shift()     //eliminamos y nos retorna el primer elemento del array
        "0"

        arreglo     //nuevos elementos de array
        (4) ["a", "b", "c", "d"]
        ```
- Posición Personalizada    
    - .splice(startindex,quantity,value1,value2,...):   
        Retorna un array con los elementos eliminados y modifica el array original.

        - startindex: indica desde que indice se van a insertar los elementos, si es negativo comienza desde el final
        - quantity: indica la cantidad de elementos que serán remplazados, si no quiere reemplazarse algun elemento se coloca 0.
        - value1,value1,...: los valores que se añadiran.
        ```JavaScript
        arreglo     //array inicial
        (4) ["a", "b", "c", "d"]

        arreglo.splice(1,0,'e','i','o','u')
        []

        arreglo
        (8) ["a", "e", "i", "o", "u", "b", "c", "d"]
        ```
    - .slice(start [,end] ):
        Extrae en un nuevo array los valores desde [start] hasta [end-1], no modifica el array inicial.
        ```JavaScript
        arreglo     //array inicial
        (8) ["a", "e", "i", "o", "u", "b", "c", "d"]

        arreglo.slice(3,6)      //seleccionando los elementos del array desde el indice 3 hasta el 5 (6-1)
        (3) ["o", "u", "b"]
        ```
### Ordenar
- .reverse():  
    Método que invierte el orden de los elementos de un array.
    ```JavaScript
    > let x=['z','a','B',1,5,2]
    < undefined

    > x.reverse()
    < (6) [2, 5, 1, "B", "a", "z"]
    ```
- .sort():  
    Ordena los elementos de un array, por defecto este método ordena los elementos como string's en un orden alfabético y ascendiente.
    ```JavaScript
    >let arreglo=['z','a','B']
    <undefined

    >arreglo
    <(3) ["z", "a", "B"]

    >arreglo.sort()
    <(3) ["B", "a", "z"]

    >arreglo.push(9,4)
    <5

    >arreglo
    <(5) ["B", "a", "z", 9, 4]

    >arreglo.sort()
    <(5) [4, 9, "B", "a", "z"]
    ```
    Notamos que el criterio de orden del método .sort() es primero los números, luego las letras mayúsuclas y luego las minúsculas.  
    Ahora veamos que pasa si agregaron un elemento (número) al arreglo e invocamos el método.
    ``` JavaScript
    >arreglo.push(100)
    <6

    >arreglo
    <(6) [4, 9, "B", "a", "z", 100]

    >arreglo.sort()
    <(6) [100, 4, 9, "B", "a", "z"]
    ```
    Vemos que el número 100 (ya incorporado en el arreglo) en el ordenamiento se ubica primero, pero ¿por qué? si 100 es mayor de 4 y 9. Sucede que como .sort los ordena a todos como si fueran string's, como el "1" del número "100" es menor que el "4" o "9" por eso lo ubica primero.
    En este casi si tenemos un cierto criterio para ordenar nuestros elementos, entonces podemos crear una función y ponerlo como parámetro, la llamaremos *compareFunction*.

    La función *compareFunction*, es una función que nos va a permitir definir el criterio de cómo queremos que los elementos del array se ordenen, para esto definimos dos parámetros (en este capitulo las llamaremos *a* y *b*, pero puedes llamarlo como quieras) y en base a estos parámetros podrás definir el criterio del ordenamiento de los elementos.

    Pero cómo la función que definamos nos permitira ordenar? Para esto JavaScript toma estas definiciones:  
     - Si `compareFunction(a,b)` es negativo, *a* se situará una posición antes que *b*.
     - Si `compareFunction(a,b)` retorna 0, no cambian las posiciones de *a* y *b*.
     - Si `compareFunction(a,b)` es positivo, *b* se situará una posición antes que *a*.
    Sabiendo esto, veamos algunos ejemplos:
        ```JavaScript
        //definamos un array
        > let x=[5,4,2,9,0,-1]
        < undefined

        x   //vemos los elementos de x
        (6) [5, 4, 2, 9, 0, -1]

        > x.push(200)     //para hacer más claro el ejemplo, ingresemos un elemento más con valor de 200
        < 7

        > x
        < (7) [5, 4, 2, 9, 0, -1, 200]

        > x.sort()  //si deseamos ordenarlo sin agregarle una función para definir la comparación
        < (7) [-1, 0, 2, 200, 4, 5, 9]  // vemos que 200 es menos que 4,5, y 9
        
        // definiendo una función, donde la resta de los dos parámetros (a y b), en este caso si restamos a y b, y si esto nos dá negativo entonces a será menor que b
        > x.sort((a,b)=>a-b)
        < (7) [-1, 0, 2, 4, 5, 9, 200]


        //también podemos hacerlo con arrays que tengas como elementos a objetos

        //definamos al arreglo con los siguientes elementos
        let arreglo=[
            {x:1,y:9},
            {x:12,y:2},
            {x:5,y:6},
            {x:9,y:1},
            {x:6,y:67}
        ]
        //para ordenarlo usarmos.sort()
        arreglo.sort((a,b)=>a.x-b.x)
        //tomamos el criterio de ordenarlos de menor a mayor con respecto al valor de la propiedad x, quedando el arreglo de la siguiente manera :
        arreglo=[
            {x: 1, y: 9}
            {x: 5, y: 6}
            {x: 6, y: 67}
            {x: 9, y: 1}
            {x: 12, y: 2}
        ]
        ```
## some, every
```JavaScript
let frutas=['manzana','pera','piña','cereza']
// every(): todos deben cumplir la condicion
frutas.every(el=>el.includes('z'))  //false
// some(): alguno de los elementos debe cumplir la condicion
frutas.some(el=>el.includes('i'))   //true
```