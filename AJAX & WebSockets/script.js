/*const div_usuario=document.querySelector('#lista-usuarios')

getJanet()
.then(data=>data.json())
.then(users=>{
    listarJanet(users.data)
})

function getJanet(){
    return fetch('https://reqres.in/api/users/2')
}
function getUsuarios(){
    return fetch('https://reqres.in/api/users')
}
function listarJanet(user){
    let nombre = document.createElement('h3');
    nombre.innerHTML=`${user.first_name} ${user.last_name}`
    div_usuario.appendChild(nombre);
    document.querySelector('.loading').style.display='none';
}
function listadoUsuarios(usuarios){
    usuarios.map((user,i)=>{
        let nombre = document.createElement('h3');
        nombre.innerHTML=`${i} ${user.first_name} ${user.last_name}`
        div_usuario.appendChild(nombre);
        document.querySelector('.loading').style.display='none';
    })
}*/

$(document).ready(function () {
    // $('#datos').load("https://reqres.in/api/users/2");
    $.get("https://reqres.in/api/users", {page:2},
        function (data) {
            console.log(data)
        },
    );
});