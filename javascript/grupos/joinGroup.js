btnUnir.addEventListener("click", ()=>getGroups(document.querySelector(".idGrupo").value))

function getGroups(id){
    let groupAlready;
    
    // checkear si ya esta en el grupo
    if (userGroups.find(group=>group.shortId == id)) {
        groupAlready = true
    }
    
    // agregar participante a grupo
    db.collection("grupos")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // si existe el grupo y no está en él todavía
            if (id == doc.data().shortId && !groupAlready) {
                groupFound(doc.data())
            }
        });
    });

}

function groupFound(groupData){
    domGrupo(groupData)
    
    // agregar grupo
    userData.grupos.push(groupData.id);
    userGroups.push(groupData)
    
    // agregar al usuario, las fotos
    groupData.fotos.forEach(foto=>{
        userData.fotos.push({
            id: foto.id,
            liked:false,
        })
    })

    db.collection("usuarios")
    .doc(`${currentUser.id}`)
    .update({
        fotos: userData.fotos
    })
    
    // agregar participantes
    groupData.participantes.push(currentUser.id)
    addParticipant(groupData, groupData.participantes)

    setGroup(currentUser.id, userData.grupos) 
    cerrarAdd()
}

function addParticipant (group, participantes){
    db.collection("grupos")
		.doc(`${group.id}`)
		.update({
			participantes: participantes,
		})
}