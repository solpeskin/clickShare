cerrarSesionBtn.addEventListener("click", () => {
	localStorage.removeItem("currentUser");
	window.location.assign("../../index.html");
});
 
if (!currentUser) {
	window.location.assign("../../index.html");
}

function perfilUsuario() {
    nombreUsuarioTxt.innerHTML = currentUser.nombre;

    if (currentUser.fotoPerfil){
        document.querySelector("#fotoPerfil").innerHTML = `<img src="${currentUser.fotoPerfil}">`
    }

    else {
        document.querySelector("#fotoPerfil").innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle fotoPerfilSVG" viewBox="0 0 16 16" >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
      </svg>`
    }
}

// grupos
function generarID (){
    return 'xxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function generarUID (){
    return 'xxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function showToastify (message, color){
    Toastify({
        text: message,
        duration: 3000,
        gravity: "bottom",
        position: "center", 
        className: "toastify",
        stopOnFocus: true, 
        style: {
            width: "180px",
            padding: "10px",
            background: color,
        },
    }).showToast();
}

