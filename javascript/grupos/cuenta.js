function addPlaceholder (){
    document.querySelector("#nuevo-username").setAttribute("placeholder", `${currentUser.nombre}`)
    document.querySelector("#nuevo-usermail").setAttribute("placeholder", `${currentUser.email}`)

    document.querySelector("#nuevo-username").value=""
    document.querySelector("#nuevo-usermail").value=""
}

