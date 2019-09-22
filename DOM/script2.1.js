const video = document.getElementById('video'),
playButton = document.getElementById('play'),
pauseButton = document.getElementById('pause');

playButton.addEventListener('click',()=>{video.play()})
pauseButton.addEventListener('click',()=>video.pause())


const gallery = document.getElementById('gallery');
gallery.addEventListener('click',(e)=>{
    const image = e.target
    const gallery = Array.from(document.querySelectorAll('img'))
    for (let index = 0; index < gallery.length; index++) {
        if(gallery[index]!=image)   continue
        console.log('Es una imagen')
    }
})

// const parent = document.getElementById('parent')
// console.log(parent)
// console.log(parent.childNodes)
// console.log(parent.children)
// console.log(parent.firstChild)
// console.log(parent.firstElementChild)
// console.log(parent.lastChild)
// console.log(parent.lastElementChild)
// console.log(parent.hasChildNodes())

// const grandSon2 = document.getElementById('grandson-2')
// console.log(grandSon2.parentElement)
// console.log(grandSon2.nextSibling)
// console.log(grandSon2.nextElementSibling)
// console.log(grandSon2.previousSibling)
// console.log(grandSon2.previousElementSibling)

// Insertar elementos

//appendChild
// const parent = document.getElementById('parent')
// const newElement = document.createElement('h3')
// newElement.textContent = 'Fui insertado'
// parent.appendChild(newElement)

// insertbefore(newelement,nextElement)
// const children = Array.from(parent.children)
// const childParent = children.filter(child=>child.children.length>0)[0]
// console.log(childParent)
// const grandSons = Array.from(childParent.children)
// const grandSon3 = grandSons.filter(child=>child.textContent.trim()==='Nieto 3')[0]
// const newElement = document.createElement('h3')
// newElement.textContent = 'Fui insertado'
// childParent.insertBefore(newElement,grandSon3)


//ejercicio con insertBefore
// const article = document.getElementById('article')
// const newElement = document.createElement('div')
// newElement.textContent = 'contenido'
// newElement.setAttribute('id','artc')
// function getMiddleChildren(element){
//     const childn = element.children
//     const middle = Math.floor(childn.length/2)
//     return childn[middle]
// }
// article.insertBefore(newElement,getMiddleChildren(article))



//insertAdjacentElement         
//insertAdjacentHTML
//insertAdjacentText
// values: beforebegin, afterbegin,beforeend,afterend
// const element = document.getElementById('adj')
// const newElement = document.createElement('div')
// newElement.textContent = 'insertado desde javascript'
// newElement.classList.add('adjacent')
// element.insertAdjacentElement('beforebegin',newElement)

// replaceChild(newElement,oldElement)
// const element = document.getElementById('adj');
// const newElement = document.createElement('div')
// newElement.textContent = 'insertado desde javascript'    
// newElement.classList.add('adjacent')
// element.replaceChild(newElement,element.children[0])

// jquery like methods
// const element = document.getElementById('adj')
// const newElement = document.createElement('div')
// newElement.textContent = 'insertado desde javascript'
// newElement.classList.add('adjacent')
// element.before(newElement)
// element.prepend(newElement)
// element.append(newElement)
// element.after(newElement)
// element.children[0].replaceWith(newElement)



// createDocumentFragment: permite crear un objeto nodo imaginario, es util para realizar cambios, añadir datos
// de gran tamaño para que el navegador rinda mas al añadirlo solo una ves que estar haciendolo con cada elemento
// este nodo queda almacenado en memoria y no pertenece al dom hasta que se inserte el elemento
// const subjectContainer = document.getElementById('subjects')
// const subjectList = document.createElement('ul')
// subjectContainer.append(subjectList)
// const subjects = ['LP2','Gestion de BD','Sistemas Digitales']

//ejemplo sin createDocumentFragmet
// for (const iterator of subjects) {
    //     const subject = document.createElement('li')
    //     subject.textContent = iterator
    //     console.log(subject)
    //     subjectList.insertAdjacentElement('beforeend',subject)
    // }
// subjectContainer.append(subjectList)

//ejemplo con createDocumentFragmet
// const subjectListFragment = document.createDocumentFragment()
// subjects.forEach(element => {
//     const subject = document.createElement('li')
//     subject.textContent = element
//     subjectListFragment.append(subject)
// });
// subjectList.append(subjectListFragment)



//templates html con js
/* Esta etiqueta mantiene oculto su contenido, quiere decir 
que no se mostrará en la página, su contenido puede ser visible
y presentado en la página usando JS.*/
// const structure = document.getElementById('structure')
// const structureElement = structure.content.cloneNode(true)
// structureElement.querySelector('h2').textContent = 'Titulo'
// structureElement.querySelector('p').textContent = 'Soy un párrafo'
// document.getElementById('temp').appendChild(structureElement)


// objeto window
// alert('es una alerta')

// let answer = confirm('Are you sure you want to exit?')
// answer? alert('Exit'):alert('Continue')

// let answer = prompt('¿Cuanto es 2+4?');
// (answer==6)? alert('Excelente!!'):alert('Wrong answer.')

// open('https://www.youtube.com','Google','width=200,height=400')


//objeto location

//location.href: link actual
//location.host: dominio:puerto
//location.hostname: dominio
//location.port: puerto
//location.protocol: protocolo
//location.origin: protocol+host
//location.hash: devuelve todos los link con #
//location.pathname: ruta interna luego del dominio
const links = Array.from(document.links)
links.forEach(link=>{
    if(link.href.includes(location.hostname))   link.style.backgroundColor = 'red'
})


//objeto history
//history.length:  indica la cantidad de paginas visitadas en esa ventana
//history.forward(): permite ir una pagina hacia adelante
//history.back(): permite ir una pagina hacia atras
//history.go(): permite indicar cuantas paginas adelante o atras quiere ir

// function as(){
//     setTimeout(() => {
//         alert('sfsdf')
//     },2000);
// }
// let timer = 0
// let counter = ''
// function star(){
//     counter = setInterval(() => {
//         timer++;
//         console.log(`Time: ${timer}`)
//     }, 1000);
// }
// function stop(){
//     clearInterval(counter)
// }

const clock = document.getElementById('clock')
setInterval(() => {
    clock.querySelector('p').textContent = new Date().toLocaleTimeString()
}, 1000);