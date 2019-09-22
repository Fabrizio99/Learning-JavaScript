# Document Object Model
Definida por la W3C, es un interfaz de programación de aplicaciones (API) para documentos HTML y XML, define la estructura logica de los documentos y la forma en como se accede y manipula un documento.
Existen 3 tipos de estándar definidas por la W3C:
- Core DOM: modelo estándar para todo tipo de documentos.
- XML DOM: modelo estándar para documentos XML.
- HTML DOM: modelo estándar para documentos HTML.

## HTML DOM
Es un modelo de objetos estándar para HTML, no es parte de la especificacion de JavaScript sino es un web API.  
Características:
- Todos los elementos HTML son **objetos**.
- Define las propiedades de los elementos HTML.
- Define los métodos para acceder a los elementos HTML.
- Define los eventos de los elementos HTML.

Cuando una página web se carga, el navegador crea el DOM.

Lo beneficioso del modelado de objetos, es poder usar JavaScript para crear un HTML dinámico.
Pudiendose realizar lo siguiente con JavaScript:
- Cambiar los elementos y atributos de una página.
- Cambiar los estilos CSS de la página.
- Remover y añadir elementos y atributos HTML.
- Reaccionar y crear eventos en la página HTML.
### Métodos y propiedades
Un **método** es una acción que se puede realizar en los elementos HTML y una **propiedad** son los valores de los elementos HTML que pueden obtenerse o ser cambiados.  
Por ejemplo, `getElementById()` es un método que permite acceder a un elemento usando su id correspondiente y `innerHTML` es una propiedad que permite obtener y cambiar cualquier elemento HTML.
### Objeto Document
El objeto **document** representa un objeto que contiene toda la página web, si deseamos acceder a un elemento del documento HTML debemos empezar accediendo al objeto document.
Además, contiene a todos los objetos de la página web.
## Nodos
Se refiere a cada punto e intersección que existe en el arbol del DOM. Un nodo no solo son los elementos del HTML, sino también los atributos y texto del elemento también son nodos.  
El DOM es construido por un arbol conformado por nodos.
![imagen arbol](https://www.w3schools.com/js/pic_htmltree.gif)
### nodeName
Indica el nombre del nodo.

### nodeType
Indica el tipo de nodo, en total existen 12 y para que cada uno sea diferenciado tiene asignado un valor.
De los 12 tipos de nodos,  solo 4 son los más importantes:

|Nombre|Valor |
|---|---|
|ELEMENT_NODE|1|
|ATTRIBUTE_NODE|2|
|TEXT_NODE|3|
|COMMENT_NODE|8|

### childNodes 
Propiedad que devuelve una coleccion de hijos nodes.

## Eventos
### Eventos multimedia
- `play()` permite reproducir el video
- `pause()` permite pausar el video
```JavaScript
//Ejemplo
const video = document.getElementById('video'), // hace referencia la etiqueta video con el id 'video'
playButton = document.getElementById('play'),
pauseButton = document.getElementById('pause');

playButton.addEventListener('click',()=>{video.play()})
pauseButton.addEventListener('click',()=>video.pause())
```
## Manipulando el DOM
## Nodos
###  Nodos hijos
- `.childNodes` retorna todos los nodos hijos.
    ```JavaScript
    const parent = document.getElementById('parent')
    console.log(parent.childNodes)
    ```
- `.children` retorna todos los nodo elementos hijos del elemento en cuestion.
    ```JavaScript
    const parent = document.getElementById('parent')
    console.log(parent.children)
    ```
- `.firstChild` retorna su primer hijo
    ```JavaScript
    const parent = document.getElementById('parent')
    console.log(parent.firstChild)
    ```
- `.firstElementChild` retorna su primer hijo de tipo elemento
    ```JavaScript
    const parent = document.getElementById('parent')
    console.log(parent.firstElementChild)
    ```
- `.lastChild` retorna el ultimo nodo hijo
    ```JavaScript
    const parent = document.getElementById('parent')
    console.log(parent.lastChild)
    ```
- `.lastElementChild`retorna el ultimo hijo de tipo elemento
    ```JavaScript
    const parent = document.getElementById('parent')
    console.log(parent.lastElementChild)
    ```
- `.hasChildNodes()` retorna un valor booleano indicando si posee nodos hijos.
    ```JavaScript
    const parent = document.getElementById('parent')
    console.log(parent.hasChildNodes())
    ```
### Nodos Padres
- `.parentElement` retorna su elemento padre.
    ```JavaScript
    const grandSon2 = document.getElementById('grandson-2')
    console.log(grandSon2.parentElement)
    ```
### Nodos Hermanos
- `.nextSibling` retorna su nodo hermano siguiente
- `.nextElementSibling` retorna su nodo hermano de tipo elemento siguiente.
- `.previousSibling` retorna su nodo hermano siguiente
- `.previousElementSibling` retorna su nodo hermano de tipo elemento siguiente.
    ```JavaScript
    const grandSon2 = document.getElementById('grandson-2')
    console.log(grandSon2.parentElement)
    console.log(grandSon2.nextSibling)
    console.log(grandSon2.nextElementSibling)
    console.log(grandSon2.previousSibling)
    console.log(grandSon2.previousElementSibling)
    ```
## Insertar elementos
- `appendChild()` inserta el elemento al final de todos sus hijos.
    ```JavaScript
    const parent = document.getElementById('parent')
    const newElement = document.createElement('h3')
    newElement.textContent = 'Fui insertado'
    parent.appendChild(newElement)
    ```
- `insertBefore(newElement,nextElement)` metodo que nos permite agregrar un elemento antes de uno de los elementos hijos del elemento original.

- `insertAdjacentElement` permite agregar un elemento con cuatro valores: `beforebegin`,`afterbegin`,`beforeend` y `afterend`. 
También existe `insertAdjacentHTML` que realiza lo mismo pero inserta un elemento HTML y `insertAdjacentText` que inserta un texto.

    ```JavaScript
    const element = document.getElementById('adj')
    const newElement = document.createElement('div')
    newElement.textContent = 'insertado desde javascript'
    newElement.classList.add('adjacent')
    element.insertAdjacentElement('afterend',newElement)
    ```
- `replaceChild(newElement,oldElement)` reemplaza un elemento.
    ```JavaScript
    const element = document.getElementById('adj');
    const newElement = document.createElement('div')
    newElement.textContent = 'insertado desde javascript'
    newElement.classList.add('adjacent')
    element.replaceChild(newElement,element.children[0])
    ```
### JQuery like methods
Métodos similares a la sintaxis y funcionalidad de JQuery, no todos los navegadores lo soportan (IE, Opera mini). En este [link](https://caniuse.com/#search=jquery%20like) puede encontrar mas información.
- `.before()` posee la misma función que `beforebegin`.
- `.after()` posee la misma función que `afterend`.
- `.prepend()` posee la misma función que `afterbegin`.
- `.append()` posee la misma función que `beforeend`.
- `nodeElement.replaceWith(newElement)` posee la misma función que `replaceChild`.
## Clonar elementos
Con el método `.cloneNode(boolean value)` permite clonar un elemento, este recibe como parámetro un argumento booleano, `true` si desea clonar con todos los hijos.
## Eliminar elementos
El método `.remove()` permite eliminar al elemento.
