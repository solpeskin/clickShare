btnUnir.addEventListener("click", ()=>getGroups(document.querySelector(".idGrupo").value.trim()))

function getGroups(id){
    if (id){
        let groupAlready;
        
        // checkear si ya esta en el grupo
        if (userGroups.find(group=>group.shortId == id)) {
            groupAlready = true
            showToastify("Ya estás en el grupo", "#000f33")
        }
        
        // agregar participante a grupo
        db.collection("grupos")
        .get()
        .then((querySnapshot) => {
            let join;
    
            querySnapshot.forEach(doc=>{
                if (doc.data().shortId == id){
                    join = doc.data()
                }
            })
    
            if (join && !groupAlready){
                console.log("yes")
                groupFound(join)
            }
    
            else if (!join){
                showToastify("El grupo no existe", "#000f33")
            }
        });
    }

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