// si esta todo onkeydown, crear user
function crearUser (){
    if (datoUsuario() && datoMail() && datoContra() && confirmarContra()){
        inputs.forEach((e)=> e.toggleAttribute("disabled"))

        guardar()
    }
}

// firebase
// guardar usuario en firebase
function guardar (){
    db.collection("usuarios").doc(datoUsuario()).set({
        nombre: datoUsuario(),
        email: datoMail(),
        contraseña: datoContra(),
        grupos: [{
            nombre: "",
            id: "",
            foto: ""
        }]
    })

    .then(() => {
        setTimeout(()=>{
            window.location.assign("iniciar-sesion.html")
        }, 1500)
    })

}

