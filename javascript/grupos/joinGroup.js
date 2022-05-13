btnUnir.addEventListener("click", ()=>getGroups(document.querySelector(".idGrupo").value))

function getGroups(id){
    let groupAlready;

    if (userGroups.find(group=>group.shortId == id)) {
        groupAlready = true
    }
    
    db.collection("grupos")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (id == doc.data().shortId && !groupAlready) {
                groupFound(doc.data())
            }
        });
    });

}

function groupFound(groupData){
    console.log(groupData.id)
    domGrupo(groupData)
    
    userData.grupos.push(groupData.id);
    userGroups.push(groupData)
    
    userGroups.forEach(group=>{
        if (group.id == groupData.id){
            group.participantes.push(currentUser.id)
            addParticipant(groupData, group.participantes)
        }
    })

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