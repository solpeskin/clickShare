function salirGrupo(grupo){
    // eliminar id de grupo en usuario
    let eliminar = userData.grupos.find(groupsID=> groupsID == grupo.id)
    eliminar = userData.grupos.indexOf(eliminar)
    userData.grupos.splice(eliminar, 1)
    
    // eliminar de array userGroups
    eliminar = userGroups.find(group=> group.id == grupo.id)
    eliminar = userGroups.indexOf(eliminar)
    userGroups.splice(eliminar, 1) 

    // eliminar participante 
    eliminar = groupPressed.participantes.indexOf(groupPressed.participantes.find(participante=> participante == currentUser.id))
    groupPressed.participantes.splice(eliminar, 1)

    editGroupsFB()

    showToastify(`Chau, grupo "${grupo.nombre}" !`, "#1c57d3")
    checkGroupParticipants()
    cargarPagina()
}

// actualizar datos fb
function editGroupsFB(){
    db.collection("usuarios").doc(`${currentUser.id}`).update({
        grupos : userData.grupos
    })

    db.collection("grupos").doc(`${groupPressed.id}`).update({
        fotos : groupPressed.fotos,
        participantes : groupPressed.participantes
    })
}

function checkGroupParticipants (){
    if (groupPressed.participantes.length == 0){
        db.collection("grupos").doc(`${groupPressed.id}`).delete()
    }
}

function eliminarFoto (fotoID){
    let eliminar = userData.fotos.find(foto=> foto.id == fotoID)
    eliminar = userData.fotos.indexOf(eliminar)
    userData.fotos.splice(eliminar, 1)

    // eliminar de group pressed y user groups
    eliminar = groupPressed.fotos.find(foto=> foto.id == fotoID)
    eliminar = groupPressed.fotos.indexOf(eliminar)

    let groupEliminar = userGroups.find(group=> group == groupPressed)
    groupEliminar = userGroups.indexOf(groupEliminar)

    groupPressed.fotos.splice(eliminar, 1)
    userGroups[groupEliminar] = groupPressed

    editGroupsFB()
    openPhotos (groupPressed.id)
    // eliminar de firebase
}