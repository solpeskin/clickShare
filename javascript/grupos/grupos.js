getUserGroups(currentUser.id)

function searchGroupByID (groupID){
    db.collection("grupos")
    .doc(`${groupID}`) 
    .get()
    .then((res)=>{
        domGrupo(res.data()) 
    })
}

// crear grupo en html
function domGrupo(grupo){
    const nuevoGrupoHTML = ` <div class="grupoInfo">
                                <div class="grupoIMG" id="${grupo.id}" onclick="openPhotos ('${grupo.id}')" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                                    </svg>
                                </div>
                                <h6>${grupo.nombre}</h6>
                            </div>`

    document.querySelector("#allGroups").innerHTML += (nuevoGrupoHTML)
}

// subir grupos a firebase  
function setGroup(username, groups, groupData) {
    // subir grupo a aray de grupos en usuario
	db.collection("usuarios")
		.doc(`${username}`)
		.update({
			grupos: groups,
		})

    // crear documento en coleccion "grupos"
    db.collection("grupos").doc(`${groupData.id}`).set({
        foto: groupData.foto,
        shortId:groupData.shortId,
        id: groupData.id,
        nombre: groupData.nombre,
        participantes: `${username}`,
        creador: groupData.creador,
    })
} 

// registrar grupo 
function crearGrupo (){
    if (nombreGrupo.value.trim()){
        let grupoNuevo = {
            foto: "",
            shortId: generarID(),
            id: generarUID(),
            nombre: nombreGrupo.value.trim(),
            creador: currentUser.id,
        };

        userGroups.push(grupoNuevo.id);
        
        setGroup(currentUser.id, userGroups, grupoNuevo)
        cerrarAdd()
        domGrupo(grupoNuevo);
    }
}



btnCrear.addEventListener("click", ()=> crearGrupo())


