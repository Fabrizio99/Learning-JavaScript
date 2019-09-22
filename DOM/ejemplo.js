//querySelectorAll
const items = Array.from(document.querySelectorAll('.listas li'))
items.forEach(item=>{
    if(item.textContent.toLowerCase().trim()==='item 2')    item.remove()
})
const listItem = document.querySelector('.listas')
listItem.querySelectorAll('li:last-child')[0].remove()

// añadiendo atributos
const box = document.getElementById('box')
console.log(box.getAttribute('id'))
box.setAttribute('class','box-style')

//classList
console.log(box.classList)
box.classList.add('box-fontStyle')
// box.classList.remove('box-style')
//toggle añade o elimina, dependiendo de lo que se necesita

//Contenido
const text = document.getElementById('textContent')
text.textContent = 'Texto añadido con textContent'
const text2 = document.getElementById('innerHTML')
text2.innerHTML=`Texto añadido con <strong>innerHTML</strong>`
const text3 = document.getElementById('outerHTML')
text3.outerHTML = `<p>Todo el elemento cambiado por una etiqueta p con outerHTML.</p>`

//eventos del mouse
const evento1 = document.getElementById('evento1')
if(evento1) evento1.addEventListener('click',()=>alert('Evento creado con un click'))

const doubleClick = document.getElementById('doubleClick')
doubleClick.addEventListener('dblclick',(e)=>{
    e.target.innerHTML = `<em>${e.target.textContent}</em>`
})

const mouse = document.getElementById('mouseOver')
mouse.addEventListener('mouseover',(e)=>{
    e.target.style.background = 'yellow'
})
mouse.addEventListener('mouseleave',(e)=>{
    e.target.style.background = 'white'
})

const event2 = document.getElementById('clickDerecho')
event2.addEventListener('contextmenu',(e)=>{
    e.preventDefault()
    console.log('se hizo click derecho')
})
//mousemove

//eventos del teclado
