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