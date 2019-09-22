const form = document.getElementById('form')
if(form) form.addEventListener('submit',()=>{
    let width = form.querySelector('#width')
    let height = form.querySelector('#height')
    let url = form.querySelector('#url')
    if(width && height && url){
        width = width.value
        height = height.value
        url = url.value
    }
    window.open(url,url,`innerWidth=${width}, innerHeight=${height}`)
})