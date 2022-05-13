inputPhoto.addEventListener("dragover", (e)=>{
    e.preventDefault()
    dragZone.classList.add("label_dragover--down");
})
inputPhoto.addEventListener("dragleave", (e)=>{
    e.preventDefault()
    dragZone.classList.remove("label_dragover--down")
})

// cerrar y abrir cartel para subir foto
function cerrarShareIdBg (){
    shareIdDIV.classList.add("displayNone")
}
function abrirShareIdBg (){
    shareIdDIV.classList.remove("displayNone")
    document.querySelector(".groupId").innerHTML = groupPressed.shortId
}

// cerrar y abrir cartel para compartir id
function cerraruploadPhotoBg(){
    uploadPhotoBg.classList.add("displayNone")
    dragZone.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
    </svg>`
}
function  abriruploadPhotoBg(){
    uploadPhotoBg.classList.remove("displayNone")
}

document.addEventListener("click", (event) => {
	// para cerrar
	if (
		event.target.id != "fotoPerfil" ||
		optionsPerfil.classList.contains("abierto")
	) {
		cerrarPerfil();
	} else {
		// para abrir
		abrirPerfil();
	}
});

document.addEventListener("click", (event) => {
	// para cerrar
	if (
		event.target.id != "cartel-opc-grupos" ||
		document.querySelector(".cartel-opc-grupos").classList.contains("abierto")
	) {
		document.querySelector(".cartel-opc-grupos").classList.add("cerrado");
        document.querySelector(".cartel-opc-grupos").classList.remove("abierto")
	} else {
        // para abrir
		document.querySelector(".cartel-opc-grupos").classList.add("abierto");
        document.querySelector(".cartel-opc-grupos").classList.remove("cerrado")
	}
});

// cerrar y abrir cartel para add grupos 
function cerrarAdd(){
    addGrupo.classList.remove("displayGrupos")
    nombreGrupo.value = "";
    document.querySelector(".idGrupo").value = "";
}

function abrirAdd (){
    addGrupo.classList.add("displayGrupos")
}

// perfil  
function abrirPerfil() {
	optionsPerfil.classList.remove("cerrado");
	optionsPerfil.classList.add("abierto");
}
 
function cerrarPerfil() {
	optionsPerfil.classList.add("cerrado");
	optionsPerfil.classList.remove("abierto");
}
 
document.addEventListener("click", (event) => {
	// para cerrar
	if (
		event.target.id != "fotoPerfil" &&
		optionsPerfil.classList.contains("cerrado")
	) {
		cerrarPerfil();
	} else {
		// para abrir
		abrirPerfil();
	}
});

// lightmode 
function changeMode (){

    if (lightmode=="light"){
        bodyGrupos.classList.add("dark")
        bodyGrupos.classList.remove("light")
        lightmode = "dark"
    }

    else if (lightmode=="dark"){
        bodyGrupos.classList.add("light")
        bodyGrupos.classList.remove("dark")
        lightmode = "light"
    }

    localStorage.setItem("lightmode", lightmode);
}

lightmodeBtn.addEventListener ("click", ()=>{
    changeMode()        
}) 