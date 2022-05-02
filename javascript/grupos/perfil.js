function perfilUsuario (){
    nombreUsuarioTxt.innerHTML = currentUser?.nombre;
}

function abrirPerfil (){
    optionsPerfil.classList.remove("cerrado")   
    optionsPerfil.classList.add("abierto")                                          
}

function cerrarPerfil (){
    optionsPerfil.classList.add("cerrado")   
    optionsPerfil.classList.remove("abierto")                                          
}

fotoPerfil.addEventListener ("click", ()=>{
    abrirPerfil()
    console.log ("abrir")

    setTimeout(
        ()=>document.addEventListener("click", ()=>{
            cerrarPerfil()
            console.log ("cerrar")
        }), 2)
}) 

cerrarSesionBtn.addEventListener ("click", ()=>{
    localStorage.removeItem("currentUser")
    window.location.assign("../../index.html")
})

if (!currentUser){
    window.location.assign("../../index.html")
}

perfilUsuario()  
