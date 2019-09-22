# Números
- toFixed():  
Este método convierte un número a un String, manteniendo un número específico de decimales. Si el npumero de decimales deseado es mayor al del número real, se agregan 0's para obtener la lingitud decimal deseada.
```JavaScript
let x=23.4561
x.toFixed(2) //EL número 2 indica el número de decimales.
//result
"23.46"

let y=3.45
y.toFixed(3)
//result
"3.450"
```
- parseInt():  
    Función que transforma un String y retorna un entero (no redondea el valor original).
    ```JavaScript
    //Sintaxis
    parseInt(String,radix)
    ```
    El parámetro radix es usado para especificar que sistema numerico debe usarse, si tuviera el valor de 16, entonces el String debe transformarse del sistema hexadecimal al sistema decimal.
    Si el paráetro radix es omitido, JS asume lo siguiente: 
    - Empieza con "0x": radix es hexadecimal.
    - Si empieza con cualquier valor: radix es decimal.

    ```JavaScript
    let x="23.34"
    parseInt(x)
    //result
    23

    let y="101010"
    parseInt(y,2) //transformara el valor de "y" de binario a decimal
    //result
    42
    ```
- parseFloat():  
Analiza un String y retorna un número flotante.
La función determina si el primer caracter en el String especificado es un npumero. Si es así, analiza la cadena hasta que llega al final del número y retorn el número como un "número".
Solo el primer numero de un String es retornado.
Se permiten espacios iniciales y finales, si el primer caracter no puede transformarse a número, retorn NaN.
```JavaScript
parseFloat('23.45')
//result
23.45

parseFloat('23.00')
//result
23

parseFloat('23 34 45')
//result
23

parseFloat('100 años = 1 siglo')
//result
100

parseFloat('siglo 21')
//result
NaN
```
- NaN *(Not a Number)*:  
Representa el valor (no es un numero), esta propiedad indica que un valor no es un numero legal.
- Math:  
Objeto en JavaScript que te permite realizar tareas matemáticas en números.
    - .floor():  
    Redondea un número hacia abajo al entero más cercano.
        ```JavaScript
        Math.floor(2.99)
        //result
        2
        ```
    - .ceil():  
    Redondea un número hacia arriba al entero más cercano.
        ```JavaScript
        Math.ceil(2.00000000001)
        //result
        3
        ```
    - .round():  
    Redondea a un número a su entero más cercano.
        ```JavaScript
        Math.round(2.00000000001)
        //result
        2

        Math.round(9.99)
        //result
        10
        ```
    - .random():  
    Retorna un número aleatorio desde cero (incluido) hasta 1(sin incluir).
        ```JavaScript
        Math.random()
        //result
        0.9789637297676281
        ```