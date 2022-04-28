const fotoPerfil = document.querySelector(".fotoPerfil") 
const nombreUsuarioTxt = document.querySelector(".nombreUsuario");
const optionsPerfil = document.querySelector(".perfil-options")
const cerrarSesionBtn = document.querySelector("#cerrarSesion");

let perfilAbierto = false


function perfilUsuario (){
    nombreUsuarioTxt.innerHTML = currentUser?.username;
}

function abrirPerfil (){
    optionsPerfil.classList.remove("cerrado")   
    optionsPerfil.classList.add("abierto") 
    perfilAbierto = true;                                           
}

function cerrarPerfil (){
    optionsPerfil.classList.add("cerrado")   
    optionsPerfil.classList.remove("abierto") 
    perfilAbierto = false;                                           
}

fotoPerfil.addEventListener ("click", ()=>{
    if (!perfilAbierto){
        abrirPerfil ()
    }

    else {
        cerrarPerfil()
    }
}) 

cerrarSesionBtn.addEventListener ("click", ()=>{
    localStorage.removeItem("currentUser")
    window.location.assign("../../index.html")
})

if (!currentUser){
    window.location.assign("../../index.html")
}

perfilUsuario()  
