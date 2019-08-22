const mostrar = document.getElementById('mostrar')
if(mostrar) mostrar.addEventListener('click',function(){
    document.getElementById('premio').style.display = 'block'
    document.getElementById('premiodoble').style.display = 'block'
})

const ocultar = document.getElementById('ocultar')
if(ocultar) ocultar.addEventListener('click',function(){
    document.getElementById('premio').style.display = 'none'
    document.getElementById('premiodoble').style.display = 'none'
})