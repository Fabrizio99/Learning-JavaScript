# CONDICIONALES
## if
Permite realizar diferentes acciones basado en diferentes condiciones.
```JavaScript
//SINTAXIS
if(condicion){ //Si se cumple la condición
    //acción de acuerdo a la condición
}else{  //sino
    //acción de acuerdo al no cumplimiento de la condición
}

//Si la condición es de una sola línea.
if(condicion) //accion de la condicion

//Condición en bloques, si la acción de la condición necesita más de una línea
if(condicion){
    // accion 1
    // accion 2
    // y más acciones
}

//Si existieran más condiciones
if(condicion1){
    //accion de la condicion1
}else if(condicion2){
    // accion de la condicion2
}else if(condicion3){
    // accion de lacondicion3
}else{
    //si no se cumple ninguna de las condiciones anteriores.
}
```
## Condiciones Múltiples
Para condiciones múltiples podemos usar los operadores lógicos && (y) o || (ó)  
Operando 1 | Operador | Operando 2 | Valor
-- | -- | -- | --
true | ```&&``` | true | true
true | ```&&``` | false | false
false | ```&&``` | true | false
false | ```&&``` | false | false
true | ```||``` | true | true
true | ```||``` | false | true
false | ```||``` | true | true
false | ```||``` | false | false
```JavaScript
let edad=12
if(edad>0 && edad<18){
    console.log('Eres menor de edad');
}else{
    console.log('Eres mayor de edad');
}
```
## Condiciones anidadas
Podemos tener condiciones dentro de otras condiciones
```JavaScript
let edad=prompt('Ingrese su edad')
if(edad){
    if(edad<18){
        console.log('Eres menor de edad');
    }else{
        console.log('Eres mayor de edad');
    }
}
```
## truthy & falsy values
Se dice por valores truthy y falsy a aquellos valores que al ser evaluados en un contexto booleano, toman como valor verdadero o false.  

**Truthy**
- String no vacío.
- Números (excepto 0).
- arrays (incluyendo un array vacío).
- objetos.

**Falsy**
- 0
- ''
- NaN
- null
- undefined
## Switch
Al igual que el condicional if, es un enunciado que nos permite realizar diferentes acciones de acuerdo a diferentes condiciones con la diferencia que estas condiciones estan divididas en bloques.
```JavaScript
//SINTAXIS
let vocal=parseInt(prompt('Ingrese un número del 1 al 5')) //Se pide que el usuario ingrese un número del 1 al 5
switch (vocal) {    //evaluamos la variable vocal
    case 1:     //si el valor de "vocal" es 1, se enviara el mensaje con la letra a
        alert('a')
        break;
    case 2:     //si el valor de "vocal" es 2, se enviara el mensaje con la letra e
        alert('e')
        break;
    case 3:     
        alert('i')
        break;
    case 4:     
        alert('o')
        break;
    case 5:     
        alert('u')
        break;
    default:
        alert('Número ingresado no válido')
        break;
}
```