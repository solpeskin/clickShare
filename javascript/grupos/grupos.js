getUserGroups(currentUser.nombre)

function getUserGroups(username) {
	db.collection("usuarios")
		.doc(`${username}`) 
		.get()
		.then((res) => {
            userGroups = res.data().grupos || []
            groupsMade ()
		})
    ;
}

// si ya existen grupos 
function groupsMade (){
    userGroups.forEach((group)=>{
        domGrupo(group)
    })
}

// crear grupo en html
function domGrupo(grupo){
    const nuevoGrupoHTML = ` <div class="grupoInfo">
                                <div class="grupoIMG"></div>
                                <h6>${grupo.nombre}</h6>
                            </div>`

    document.querySelector("#allGroups").innerHTML += (nuevoGrupoHTML)
}

// subir grupos a firebase  
function setGroup(username, groups) {
	db
		.collection("usuarios")
		.doc(`${username}`)
		.update({
			grupos: groups,
		})

} 

// registrar grupo 
function crearGrupo (){
    if (nombreGrupo.value.trim()){
        let grupoNuevo = {
            foto: "",
            id: generarID(),
            nombre: nombreGrupo.value.trim(),
        };

        userGroups.push(grupoNuevo);
        
        setGroup(currentUser.nombre, userGroups)
        cerrarAñadir()
        domGrupo(grupoNuevo);
    }
}

// cerrar y abrir cartel para añadir grupos 
function cerrarAñadir(){
    añadirGrupo.classList.remove("displayGrupos")
    nombreGrupo.value = "";
}

function abrirAñadir (){
    añadirGrupo.classList.add("displayGrupos")
}

btnCrear.addEventListener("click", ()=> crearGrupo())


