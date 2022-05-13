function abrirCuenta(){
    document.querySelector(".account-settings").classList.remove("displayNone")
    allGroups.classList.add("displayNone")
    groupPhotos.classList.add("displayNone")

    addPlaceholder()
}

function addPlaceholder (){
    document.querySelector("#nuevo-username").setAttribute("placeholder", `${currentUser.nombre}`)
    document.querySelector("#nuevo-usermail").setAttribute("placeholder", `${currentUser.email}`)
    document.querySelector("#nueva-contra").setAttribute("placeholder", `${currentUser.contraseña}`)
}