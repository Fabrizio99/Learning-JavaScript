// const title = document.getElementById('title')
// title.style.background = 'yellow'

// //queryselector selecciona el primero
// //id
// console.log(document.querySelector('#title'))
// //elemento
// console.log(document.querySelector('li'))
// //clases
// console.log(document.querySelector('.body'))

// // queryselectorall selecciona todos
// console.log(document.querySelectorAll('body h1'))
// console.log(document.querySelectorAll('ul li'))

// const list = document.getElementById('list')
// console.log(list.querySelector('li:last-child').textContent)

// const nodeList = Array.from(document.querySelectorAll('li'))
// const nodeList = Array.prototype.slice.call(document.querySelectorAll('li'))
// nodeList.map(element => {
//     if(element.textContent.trim().toUpperCase()==='OBJECT') {
//         element.remove();
//     }
// })
// console.log(document.getElementById('title'))
// const title = document.getElementById('title')
// console.log(title.innerHTML = title.textContent+' changed')
// title.style.fontFamily = 'Arial'
// title.style.background = 'grey'
// console.log(document.querySelector('#title'))
// console.log(document.querySelectorAll('li'))
// const list = document.getElementById('list')
// console.log(list.querySelector('li:last-child').textContent)


// //Atributos
// const title = document.getElementById('title')
// console.log(title.getAttribute('id'))
// console.log(title.getAttribute('class'))
// document.getElementById('title2').setAttribute('class','titles')
// console.log(document.getElementById('title2'))
// const titles = document.querySelectorAll('.titles')
// console.log(titles)

// //classList
// // permite acceder a la lista de clases de un elemento como una cadena de texto
// console.log(title.classList)
// // permite añadir una clase
// title.classList.add('word')
// console.log(title)
// // permite eliminar una clase
// title.classList.remove('h1')
// console.log(title)
// // si una clase no existe lo agrega, de lo contrario lo elimina
// title.classList.toggle('text')
// console.log(title)
// title.classList.toggle('text')
// console.log(title)

// // Contenido
// const title = document.getElementById('title')
// // devuelve todo el texto contenido en ese elemento
// console.log(title.textContent)
// // devuelve todo lo contenido en ese elemento, incluyendo etiquetas html
// console.log(title.innerHTML)
// // devuelve toda la etiqueta html
// console.log(title.outerHTML)

// title.textContent = `titulo <em>cambiado</em>`
// console.log(title)
// title.innerHTML = `titulo <em>cambiado</em>`
// console.log(title)
// title.outerHTML = `<em>cambiado2</em>`

// Crear elementos
//createElement
// const texto  = document.createElement('li')
// texto.textContent = 'Fabrizio Condori'
// texto.setAttribute('id','psn1')
// texto.classList.add('persona')
// document.getElementById('listado').appendChild(texto)

// eventos
const person = document.getElementById('psn1')
person.addEventListener('click',(e)=>console.log(e.target.textContent))

const boton = document.querySelector('.boton')
console.log(boton)


// eventos de mouse
//click
if(boton)   boton.addEventListener('click',(event)=>alert(event.target.textContent))
//doubleclick
person.addEventListener('dblclick',(e)=>e.target.innerHTML = `<em>${e.target.textContent}</em>`)

const underline = Array.from(document.querySelectorAll('#list li'))
//mouseenter:  cuando el mouse esta sobre el elemento
underline.forEach(element => element.addEventListener('mouseenter',(e)=>e.target.style.background = 'grey'))
//mouseleave:  cuando el mouse esta fuera el elemento
underline.forEach(element => element.addEventListener('mouseleave',(e)=>e.target.style.background = 'greenyellow'))

//contextmenu se refiere al click derecho sobre el elemento
const title = document.getElementById('title')
title.addEventListener('contextmenu',(e)=>{
    //preventDefault() cancela todos los eventos por defecto del elemento
    e.preventDefault()
    console.log('contexto del menu')
})
//mousedown cuando no se suelta el mouse cuando se hace click
const title2 = document.getElementById('title2')
title2.addEventListener('mousedown',(e)=>e.target.style.color='red')
//mouseup cuando se suelta el mouse cuando se hace click
title2.addEventListener('mouseup',(e)=>e.target.style.color='white')
//mousemove cuando se mueve el mouse sobre el elemento
title2.addEventListener('mousemove',(e)=>e.target.style.color='grey')

//eventos del teclado
const keyword = document.getElementById('input')
//keyup cuando se suelta el teclado
keyword.addEventListener('keyup',e=>{
    console.log('keyup',e.key)
})
//keydown cuando se tiene presionado el teclado
keyword.addEventListener('keydown',e=>{
    console.log('keydown',e.key)
})
//keydown cuando se tiene presionado el teclado
keyword.addEventListener('keypress',e=>{
    console.log('keypress',e)
})
//ejemplo de eventos del teclado
document.addEventListener('keydown',(e)=>{
    if(e.key==='a' && e.ctrlKey===true){
        e.preventDefault()
        alert('control+a')
    }
})


//eventos del formulario
// submit
const form = document.getElementById('form')
form.addEventListener('submit',(e)=>{
    if(document.getElementById('usuario').value==='' || 
    document.getElementById('contrasena').value===''){
        console.log('Llene todos los datos')
    }else{
        console.log('se enviaron los datos al servidor')
        document.getElementById('usuario').value=''
        document.getElementById('contrasena').value=''
    }
})
//change: ocurre cuando el valor de un elemento ha sido cambiado
// para radiobuttons y checkboxs, este evento ocurre cuando el estado checked ha sido cambiado
const checkbox = document.getElementById('checkbox')
checkbox.addEventListener('change',e=>{
    (e.target.checked)? console.log('El usuario desea recordar su contraseña') : console.log('El usuario NO desea recordar su contraseña');
})
const user = document.getElementById('usuario')
user.addEventListener('change',e=>e.target.value = e.target.value.toUpperCase())
//focus cuando entra al elemento
user.addEventListener('focus',e=>e.target.style.background='grey')
//blur cuando sale del elemento
user.addEventListener('blur',e=>e.target.style.background='white')
// reset

// eventos del DOM
// DOMContentLoaded permite que se ejecute ni bien se termine de cargar todos los elementos del dom de la pagina
// ejemplo en el scritp2

//eventos del navegador
addEventListener('load',()=>alert('Se termino de cargar la página'))
addEventListener('scroll',(e)=>console.log(e))
addEventListener('resize',(e)=>console.log(e.target))