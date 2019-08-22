//ejemplo de DOMContentLoaded
addEventListener('DOMContentLoaded',()=>{
    const titl = document.getElementById('title')
    titl.addEventListener('mousemove',(e)=>console.log(e.target.textContent))
})
