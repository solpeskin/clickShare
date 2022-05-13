let link;

if (groupPressed){
    getUserGroupsPhotos(groupPressed)
}

function addNewPhoto (photo){
    let userUploadedPhoto;

    db.collection("usuarios")
		.doc(`${photo.user}`).get().then((res) => {
            userUploadedPhoto = res.data().nombre

            const newPhotoHTML = `    
            <div class="IMG">
                <img src="${photo.link}" alt="foto grupos">
                <div class= "hoverIMG">
                    <p class="person-uploaded">${userUploadedPhoto}</p>
                    <div class ="heart ${checkLike(photo)}" id="${photo.id}" onclick ="likePhoto (event)" >
                        ${likedHTML(checkLike(photo))}
                    </div>
                </div>
            </div>
            `
            photosOnHTML.innerHTML += (newPhotoHTML)
		})
    ;
}

// cuando abro grupo
function openPhotos (group){
    // se muestra página de grupo
    groupPhotos.classList.remove("displayNone")
    allGroups.classList.add("displayNone")

    groupPressed = userGroups.find(x => x.id == group)
    groupPosition = userGroups.indexOf(groupPressed)

    document.getElementById("nombreGrupo").innerHTML = groupPressed.nombre
            
    // obtener fotos que ya están en el grupo
    groupPressed.fotos?.forEach(photo => {
        addNewPhoto(photo)
    });


}

// subir foto a fb
function setPhoto (group, date, link){
    let newPhotoFB = {
        id: generarUID (),
        user: `${currentUser.id}`,
        link: `${link}`,
        date: `${date}`,
    }

    groupPressed.fotos.push(newPhotoFB)
    console.log(newPhotoFB.id)

    userFotos.push({
        id : newPhotoFB.id,
        liked : false
    })

    addNewPhoto(newPhotoFB)

    db.collection("grupos")
		.doc(`${group.id}`)
		.update({
			fotos: groupPressed.fotos,
		})

    db.collection("usuarios")
        .doc(`${currentUser.id}`)
        .update({
            fotos : userFotos
        })
}

inputPhoto.onchange = function(){
    let file = inputPhoto.files[0]
    if (file.type == "image/png" || file.type == "image/jpg" || file.type == "image/svg+xml" || file.type == "image/jpeg"){
        createPreview(file)
    }
}

function createPreview (file){
    let reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.addEventListener("load", (e)=>{
        link = e.target.result
        dragZone.innerHTML = `<img src="${link}" alt="" class="previewIMG">`
    })
}

// subir foto
sendPhoto.addEventListener("click", ()=>{
    setPhoto(groupPressed, inputPhoto.files[0].lastModifiedDate, link)
    cerraruploadPhotoBg()
})

