// perfil 
function perfilUsuario() {
	nombreUsuarioTxt.innerHTML = currentUser?.nombre;
}
 
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
		event.target.id != "fotoPerfil" ||
		optionsPerfil.classList.contains("abierto")
	) {
		cerrarPerfil();
	} else {
		// para abrir
		abrirPerfil();
	}
});
 
cerrarSesionBtn.addEventListener("click", () => {
	localStorage.removeItem("currentUser");
	window.location.assign("../../index.html");
});
 
if (!currentUser) {
	window.location.assign("../../index.html");
}
 
perfilUsuario();
 

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

// grupos
function generarID (){
    return 'xxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
