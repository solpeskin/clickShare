cerrarSesionBtn.addEventListener("click", () => {
	localStorage.removeItem("currentUser");
	window.location.assign("../../index.html");
});
 
if (!currentUser) {
	window.location.assign("../../index.html");
}

function perfilUsuario() {
	nombreUsuarioTxt.innerHTML = currentUser?.nombre;
}

perfilUsuario();
 
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

