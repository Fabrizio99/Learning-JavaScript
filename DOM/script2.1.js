const video = document.getElementById('video'),
playButton = document.getElementById('play'),
pauseButton = document.getElementById('pause');

playButton.addEventListener('click',()=>video.play())
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