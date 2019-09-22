# Operadores
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