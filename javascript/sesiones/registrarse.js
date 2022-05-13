// funciones
// examinar datos registro

function examinarDatos (){
    datoMail()
    datoUsuario()
    datoContra()
    confirmarContra()
}

// examinar datos mail
function datoMail(){
    let textoErrorMail = mail.parentElement.querySelector(".submitError");
    submitNoError(textoErrorMail);

    // si esta vacío
    if (!mail.value){
        submitError(textoErrorMail, "Ingrese un correo electrónico.");
    } 

    // si ya fue utilizado 
    else if (searchMail()){
        submitError(textoErrorMail, "El mail ingresado ya fue utilizado.")
    }


    else {
        return mail.value;
    }
}

// examinar datos del usuario
function datoUsuario(){
    let textoErrorUser = username.parentElement.querySelector(".submitError");
    submitNoError(textoErrorUser);

    // si es mas grande que 15
    if (username.value.length >15 || username.value.length <4) {
        submitError(textoErrorUser, "Tu nombre de usuario debe ser de entre 4 y 15 caracteres.")
    }

    // si ya existe
    else if (searchUser()){
        submitError(textoErrorUser, "Nombre de usuario no disponible.")
    }

    // si esta vacío
    else if (!username.value){
        submitError(textoErrorUser, "Ingrese un nombre de usuario.");  
    }

    else {
        return username.value;
    }

}

// examinar datos contraseña
function datoContra(){
    let textoErrorContra = contra.parentElement.querySelector(".submitError");
    submitNoError(textoErrorContra);

    // si es mas chico que 6
    if (contra.value.length <6){
        submitError(textoErrorContra, "Tu contraseña debe ser de al menos 6 caracteres.");
    }

    // si esta vacío
    if (!contra.value){
        submitError(textoErrorContra, "Ingrese una contraseña.");  
    }

    else {
        return contra.value
    }
}

// examinar que la confirmación sea iagual a la contra
function confirmarContra(){
    let textoErrorConfirmacion = confirmacion.parentElement.querySelector(".submitError");
    submitNoError(textoErrorConfirmacion);

    // si esta vacío
    if (!confirmacion.value){
        submitError(textoErrorConfirmacion, "Debe confirmar su contraseña.");  
    }

    // si no son iguales 
    if (confirmacion.value !== contra.value){
        submitError(textoErrorConfirmacion, "La contraseña no coincide.");
    }  

    else {
        return confirmacion.value
    }

}    

// al hacer cliick registrar
function registrar(event){
    event.preventDefault();
    examinarDatos();
    crearUser();

    // al escribir algo ...
    inputs.forEach((e)=> {
        e.addEventListener("input", ()=> examinarDatos());
    })
};

// si esta todo okey, crear user
function crearUser (){
    if (datoUsuario() && datoMail() && datoContra() && confirmarContra()){
        inputs.forEach((e)=> e.toggleAttribute("disabled"))

        guardar()
    }
}


// generar id
function uuid (){
    return 'xxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxx-xxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


// firebase
// guardar usuario en firebase
function guardar (){
    let id = uuid()
    db.collection("usuarios").doc(`${id}`).set({
        nombre: datoUsuario(),
        email: datoMail(),
        contraseña: datoContra(),
        grupos: [],
        id: `${id}`,
        fotoPerfil: "",
        fotos: "",
    })

    .then(() => {
        setTimeout(()=>{
            window.location.assign("iniciar-sesion.html")
        }, 1500)
    })

}