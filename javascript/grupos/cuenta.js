let cambiosHechos = "";
function addPlaceholder (){
    document.querySelector("#nuevo-username").setAttribute("placeholder", `${currentUser.nombre}`)
    document.querySelector("#nuevo-usermail").setAttribute("placeholder", `${currentUser.email}`)

    document.querySelector("#nuevo-username").value=""
    document.querySelector("#nuevo-usermail").value=""
}

function changeIconFoto (file){
    let reader = new FileReader();
    reader.readAsDataURL(file);
        
    reader.addEventListener("load", (e)=>{
        let linkFoto = e.target.result
        document.querySelector(".IMGperfil").innerHTML = `<img src="${linkFoto}" alt="Foto perfil" class="perfilCotent">`
        userData.fotoPerfil = linkFoto
        cambiosHechos += 1
    })
}

function previewIcon(){
    let file = document.querySelector("#nuevo-fotoperfil").files[0]
    if (file.type == "image/png" || file.type == "image/jpg" || file.type == "image/svg+xml" || file.type == "image/jpeg"){
        changeIconFoto (file)
    }
}

function actualizarCambioUserFB(grupo, userGroup){
    db.collection("grupos")
		.doc(`${grupo}`)
		.update({
			nombre: userGroup.nombre,
            foto: userGroup.foto
		})
}

function editUser(){
    if (document.querySelector("#nuevo-username").value.trim()){
        if (usuarios.find((user) => user?.nombre === document.querySelector("#nuevo-username").value.trim() ) || document.querySelector("#nuevo-username").value.trim().length <4){
            document.querySelector(".new-nombre-no-disponible").innerHTML = "Nombre no disponible"
        }

        else {
            document.querySelector(".new-nombre-no-disponible").innerHTML = ""
            userData.nombre = document.querySelector("#nuevo-username").value.trim()
            cambiosHechos += 1
        }
    }

    if (document.querySelector("#nuevo-usermail").value.trim()){
        userData.email = document.querySelector("#nuevo-usermail").value.trim()
        cambiosHechos += 1
    }

    
    if (cambiosHechos){  
        actualizarCambioUserFB()
        showToastify("Cambios guardados", "#000f33")
        cerrarEditarGrupo()
        cambiarHeader()
        abrirCuenta()
    }

    else {
        showToastify("No hay ningun cambio", "#000f33")
    }
}
function actualizarCambioUserFB(){
    db.collection("usuarios")
		.doc(`${currentUser.id}`)
		.update({
			nombre: userData.nombre,
            email: userData.email,
            fotoPerfil: userData.fotoPerfil,
		})
}

function cambiarHeader(){
    perfilUsuario()
}