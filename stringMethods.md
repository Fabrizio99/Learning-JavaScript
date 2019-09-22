# STRING
## Propiedades
- length:  
    Esta propiedad retorn la longitud de un string (los espacios en blanco tambien cuentan).
    ```JavaScript
    'javascript'.length
    //result
    10
    ```
## Métodos
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