// dispoibles ? 
function searchUser (){
    return usuarios.find((user) => user?.username === username?.value);
}

function searchMail (){
    return usuarios.find((user) => user?.mail === mail?.value);
}

// al hacer cliick registrar
function registrar(event){
    event.preventDefault();
    examinarDatos();
    crearUser();

    // pasa con el primer submit
    document.querySelectorAll(".escribir").forEach((e)=> {
        e.addEventListener("input", ()=> examinarDatos());
    })
};

function iniciarSesion(event){
    event.preventDefault();
    examinarLogIn();

    document.querySelectorAll(".escribir").forEach((e)=> {
        e.addEventListener("input", ()=> {
            examinarLogIn();
        });
    })
}

function examinarLogIn () {
    // variables 
    const userFound = searchUser() || searchMail();
    let textoErrorUser = username.parentElement.querySelector(".submitError");
    let textoErrorContra = contra.parentElement.querySelector(".submitError");
    
    usuarioLogIn(userFound, textoErrorUser)
    contraLogIn(userFound, textoErrorContra)
}

// examinar usuario ingresado en login 
function usuarioLogIn (userFound, textoErrorUser){
    if (!username.value){
        submitError(textoErrorUser, "Ingresar nombre de usuario.")
    }

    else if (!userFound){
        submitError(textoErrorUser, "Nombre de usuario no existe.")
    }

    else {
        submitNoError(textoErrorUser)
    }
}

// examinar contraseña login 
function contraLogIn (userFound, textoErrorContra){
    if (!contra.value){
        submitError(textoErrorContra, "Ingresar contraseña")
    }

    // inicio de sesion exitoso 
    else if (userFound?.contraseña === contra.value){
        console.log ("ingreso exitoso")
        submitNoError(textoErrorContra)
        currentUser = userFound;

        localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }

    else {
        submitError(textoErrorContra, "La contraseña no es correcta.")
    }
}