# JavaScript
## Operadores
- Asignación:
    - =
    ```JavaScript
    //asignandole el valor de 3 a la varible number
    let number=3
    ```
    - +=
    ```JavaScript
    //Aumentando el valor de number en 2
    number+=2
    //result
    5
    ```
    - -=
    ```JavaScript
    //Disminuyendo el valor de number en 2
    number-=1
    //result
    4
    ```
    - *=
    ```JavaScript
    //El valor de number aumenta multiplicandolo por 3
    number*=3
    //result
    12
    ```
    - /=
    ```JavaScript
    //El valor de number es modificado dividiendolo en 2
    number/=2
    //result
    6
    ```
    
- Comparación:  
    - == & !== *(Operadores de comparación relajada)*:  
    Comparan el valor de los operandos, quiere decir, JavaScript intenta comparar los valores igualando sus tipos de datos (type coercion).
    ```JavaScript
    5=='5'
    //result
    true
    ```
    - === & !== *(Operadores de comparación estricta)*:  
    Contrario a los operandos de comparación estricta, si los operandos tienen tipos de datos distintos, no son iguales.
    ```JavaScript
    5=='5'
    //result
    false
    ```
    - ```>```:  
    El resultado es un valor booleano, respodiendo si el primer operando de la comparación es mayor al segundo operando.
    ```JavaScript
    45>23
    //result
    true

    12>67
    //result
    false
    ```
    - ```<```:  
    El resultado es un valor booleano, respodiendo si el primer operando de la comparación es menor al segundo operando.
    ```JavaScript
    45<23
    //result
    false

    12<67
    //result
    true
    ```
    - ```>=```:  
    El resultado es un valor booleano, respodiendo si el primer operando de la comparación es mayor o igual al segundo operando.
    ```JavaScript
    12>=12
    //result
    true

    23>1
    //result
    true
    ```
    - ```<=```:  
    El resultado es un valor booleano, respodiendo si el primer operando de la comparación es menor o igual al segundo operando.
    ```JavaScript
    12<=12
    //result
    true

    4<9
    //result
    true
    ```

    ```JavaScript
    //Tambien podemos hacer comparaciones con cadenas de texto (String). Se toma como criterio el orden del abecedario para realizar la comparación
    'a'<'b'
    //result
    true

    'alfredo'>'abelardo'
    true
    ```
- Unarios:  
    Un operador unario es aquel que toma un solo operador (o argumento) y realiza una operación en éste, el operando pueden ir antes o despues del operador. Estos operadores son incluso más eficientes que las *standard JavaScript Functions* (String(), Number(),etc).
    - Plus (+):  
    Puede convertir String, valores booleanos y null a numeros; los números incluiran enteros, flotantes, hexadecimales, notación científica e infinito.
    ```JavaScript
    +'123'
    //result
    123

    +true
    //result
    1

    +false
    //result
    0

    +null
    //result
    0

    +'Infinity'
    //result
    Infinity
    ```
    - Negación (-): Realiza la misma operación que el operando plus, a excepción que realiza la operación de negación.
    ```JavaScript
    -'3'
    //result
    -3

    -true
    //result
    -1

    -null
    //result
    -0

    -'Infinity'
    //result
    -Infinity
    ```
    - Lógico No(!):  
    Este operador viene antes del operando, convirtiendo al operador en su equivalente booleano pero en su forma negativa.
    ```JavaScript
    !false
    //result
    true

    !NaN
    //result
    true

    !0
    //result
    true

    !null
    //result
    true

    !undefined
    //result
    true

    !''
    //result
    true

    !'true'
    //result
    false
    
    !'false'
    //result
    false

    !'-3'
    //result
    false

    !{}
    //result
    false

    ![]
    //result
    false

    !function(){}
    //result
    false

    !!'abc'===true
    //result
    true
    //Sucede ya que !'abc' resulta ser false, pero !false es true, entonces true===true, al ser del mismo tipo y valor entonces el resultado de esta comparacion es verdadera(true)
    ```
    - Incremento (++):  
    Este operador aumenta en uno a su operando y retorna el resultado.  
    Puede ser usado como un operador pre-fijo y post-fijo.
        - Post-fijo:  
        Viene despues del operando (Ej. a++), este retorna el valor antes de incrementarlo.
        - Pre-fijo:  
        Viene antes del operando (Ej. a++), este retorna el valor despues de incrementarlo.
    ```JavaScript
    //PRE-FIJO
    let x=3
    let y=x++
    console.log(x,y)
    //result
    4 3
    //Esto sucede ya que y obtiene el valor de x antes de incrementarlo en 1.

    let q=2
    q++
    console.log(q)
    //result
    2
    console.log(q)
    //result
    3
    //Esto sucede ya que en el primer resultado q toma el valor antes de incrementarlo.
    ```
    ```JavaScript
    let x=3
    let y=++x
    console.log(x,y)
    //result
    4 4
    //Esto sucede ya que y obtiene el valor de x despues de incrementarlo en 1.

    let q=2
    q++
    console.log(q)
    //result
    3
    //Sucede ya que a "q" se le establece el valor despues de incrementar.
    ```
    - typeof:  
    Retorna un String indicando el tipo de dato del operando.
    ```JavaScript
    typeof 2
    //result
    "number"

    typeof 'abcdef'
    //result
    "string"

    typeof null
    //result
    "object"

    typeof undefined
    //result
    "undefined"

    typeof Date()
    //result
    "string"
    ```
- Aritmético:
    - Suma (+):
    ```JavaScript
    5+4
    //result
    9
    ```
    - Resta (-):
    ```JavaScript
    5-4
    //result
    1
    ```
    - Multiplicación (*):
    ```JavaScript
    5*4
    //result
    20
    ```
    - División (+):
    ```JavaScript
    5/4
    //result
    1.25
    ```
    - Resto (%):  
    Devuelve el residuo de una división
    ```JavaScript
    5%4
    //result
    1
    ```
- Ternario:  
Es el punico operador en JavaScript que tiene 3 operandos, es usado con frecuencia como atajo para la instrucción *if*.
```JavaScript
condicion ? expresion1 : expresion2
```
- De corto circuito:  
    - ||: escoge el primer valor que sea verdadero, si el primero es falso, entonces tendrá el valor del segundo así éste tenga un valor falso tambien.
    ```JavaScript
    let a=3||null
    //result
    3

    let b=null||undefined
    //result
    undefined
    ```
    - &&: escoge el primer valor que sea falso, si el primero es verdadero, entonces tendrá el valor del segundo así éste tenga un valor verdadero tambien.
    ```JavaScript
    let x=null&&23
    //result
    null

    let y=23&&56
    //result
    56
    ```
## Números
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
## STRING
### Propiedades
- length:  
    Esta propiedad retorn la longitud de un string (los espacios en blanco tambien cuentan).
    ```JavaScript
    'javascript'.length
    //result
    10
    ```
### Métodos
- Sin parámetros: 
    - trim():  
        Remueve los espacios en blanco de ambos lados de un String.
        ```JavaScript
        '     javascript   '.trim()
        //result
        "javascript"

        '     jav  asc  ript   '.trim()
        //result
        "jav  asc  ript" //solo borra los espacios en blanco de los extremos.
        ```
    - toUpperCase():  
        Este método convierte todas las letras de un String en mayúsculas.
        ```JavaScript
        'javascript'.toUpperCase()
        //result
        "JAVASCRIPT"
        ```
    - toLowerCase():  
        Este método convierte todas las letras de un String en minúsculas.
        ```JavaScript
        'LoWerCASE'.toLowerCase()
        "lowercase"
        ```
    - indexOf():  
        Método que retorna la posición de la primera aparición de un valor especificado en un String.
        ```JavaScript
        'abcdef'.indexOf('d')
        //result
        3

        'hola mundo'.indexOf('mundo')
        //result
        5

        'javascript'.indexOf('u')
        //result
        -1
        //si el parametro de indexOf() no se encuentra en el string, retorna -1 como resultado

        'abcdef'.indexOf(e,2) //el segundo parametro indica desde que posición comenzara a buscar el valor del primer parametro en el string
        //result
        4

        'javascript'.indexOf('a','javascript'.indexOf('a')+1) //buscando la segunda "a", primero hallando la posicion de la primera sumandole uno.
        //result
        3
        ```
    - lastIndexOf():  
        Método que retorna la posición de la última aparición de un valor en un string.
        La busqueda se hace desde el final hacia el inicio, pero el conteo (index) lo hace desde el inicio hasta el final.
        Al igual que indexOf(), retorna -1 cuando no encuentra el valor expecífico.
        ```JavaScript
        'abc abc abc'.lastIndexOf('abc')
        //result
        8

        'abc abc abc'.lastIndexOf('f')
        //result
        -1
        ```
    - includes():  
        Método que determina si un string contiene los caracteres de un string en específico.
        ```JavaScript
        'www.google.com.pe'.includes('google')
        //result
        true
        'www.google.com.pe'.includes('youtube')
        //result
        false
        ```
    - startsWith():  
        Método que determina si un string comienza con los caracteres de un string en especifico.
        ```JavaScript
        'www.google.com.pe'.startsWith('http')
        //result
        false

        'www.google.com.pe'.startsWith('www')
        //result
        true
        ```
    - endsWith():  
        Método que determina si un string termina con los caracteres de un string en especifico.
        ```JavaScript
        'www.google.com.pe'.endsWith('co')
        //result
        false

        'www.google.com.pe'.endsWith('pe')
        //result
        true
        ```
- Manipular string:
    - replace():  
        Este método busca un valor especifico (primer parametro) de un string y retorna un nuevo string donde el valor especificado es reemplazado por uno nuevo (segundo parametro).
        ```JavaScript
        'go to the cinema'.replace('cinema','school')
        //result
        "go to the school"

        'go to the cinema'.replace('c','school')
        //result
        "go to the schoolinema"

        'go to the cinema'.replace('cia','school')
        //result
        "go to the cinema"
        ```
    - split():
        Sirve para dividir un string en un conjunto de array's de substring's, y retorna un nuevo array.
        ```JavaScript
        'javascript'.split('a')
        //result
        (3) ["j", "v", "script"]

        'javascript'.split('')
        //result
        (10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]

        'javascript'.split('f')
        //result
        ["javascript"]
        ```
    - substring():  
        Este método extrae el caracter de un string, entre dos indices específicos y retorna la nueva subcadena.  
        Si el primer indice es mayor al segundo, el método intercabiara los dos argumentos, subtring(1,4) == subtring(4,1).  
        Si tanto el primer como el segundo parámetro es menor que 0, será tratado como si fuera 0.
        ```JavaScript
        'javascript'.substring(0,4)
        //result
        "java"

        'javascript'.substring(4,0)
        //result
        "java"

        'javascript'.substring(5,-2)
        //result
        "javas"

        'javascript'.substring(5,-3)
        //result
        "javas"
        ```
        Como se puede ver, en el último tanto el último como el penúltimo ejemplo tienen la misma subcadena a pesar que el segundo parámetro de cada uno es distinto, esto sucede ya que todos los valores negativos son tratados como si fueran 0.
    - substr():
        Este método permite que, al indicar el indice de un string en específico (primer parametro) y la longitud del substring a extraer (segundo parametro-opcional), obtendremos un nuevo subtring.
        ```Javascript
        //Sintaxis
        'word'.substr(first_parameter,second_parameter)
        ```
        ```JavaScript
        'backend'.substr(2)
        //result
        "ckend"

        'backend'.substr(2,4)
        //result
        "cken"

        'backend'.substr(-5,4)
        //result
        "cken"
        //si el primer parametro es negativo, contará desde el final hacia el inicio, comenzando desde -1
        ```
    - slice():
        Este método extrae partes de un string y retorna las partes extraidas en un nuevo string.
        La diferencia con el método substring(), es que al darle valores negativos tanto al primer como al segundo parámetro, estos son contados desde el final hasta el inicio, comenzando desde -1.
        ```JavaScript
        'javascript'.slice(1,4)
        //result
        "ava"
        
        'javascript'.slice(-5,-3)
        //result
        "cr"
        ```