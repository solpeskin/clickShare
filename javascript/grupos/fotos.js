let link;
let userNames = []

if (groupPressed){
    getUserGroupsPhotos(groupPressed)
}

function domFoto (photo){
    let userUploaded = usuarios.find((user) => user?.id == photo.user)
    let deleteOption = ""

    if (userUploaded.id == currentUser.id){
        deleteOption = ` <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="bi bi-trash3-fill eliminar-imagen" viewBox="0 0 16 16" onclick="eliminarFoto ('${photo.id}')">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
        </svg>`
    }

    return `
        <div class="IMG">
            <img src="${photo.link}" alt="foto grupos">
            <div class= "hoverIMG">
                <p class="person-uploaded">${userUploaded?.nombre}</p>
                <div class ="option-image">
                    <div class="delete-photos-div" title="Eliminar foto">${deleteOption}</div>
                    <div class ="heart ${checkLike(photo)}"  onclick ="likePhoto (event, '${photo.id}')" title="Like">
                        ${likedHTML(checkLike(photo))}
                    </div>
                </div>
            </div>
        </div>
    `
}

function addNewPhoto (photo){
    const newPhotoHTML = domFoto(photo)
    document.querySelector(".groupPhotos").innerHTML += (newPhotoHTML)
}

// sube foto al firebase de cada usuario
function addFotoToParticipant(user, foto){
    db.collection("usuarios")
    .doc(`${user}`)
    .get()
    .then(res=>{
        let fotosParticipant = (res.data().fotos)

        // si el usuario ya tiene fotos 
        if (fotosParticipant){
            fotosParticipant.push({
                id : foto.id,
                liked : false,
            })
        }
    
        // si no
        else {
            fotosParticipant = [{
                id : foto.id,
                liked : false,
            }]
        }

        db.collection("usuarios")
        .doc(`${user}`)
        .update({
            fotos: fotosParticipant
        })

        // actualizar datos local
        if (user == userData.id){
            userData.fotos = fotosParticipant
        }
    })
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

    groupPressed.participantes.forEach(participant => {
        addFotoToParticipant(participant, newPhotoFB)
    });

    // mostrar foto en grupo
    addNewPhoto(newPhotoFB)

    db.collection("grupos")
		.doc(`${group.id}`)
		.update({
			fotos: groupPressed.fotos,
		})
}

function createPreview (file){
    let reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.addEventListener("load", (e)=>{
        link = e.target.result
        dragZone.innerHTML = `<img src="${link}" alt="${inputPhoto.files[0].name}" class="previewIMG">`
    })
}

// subir foto
sendPhoto.addEventListener("click", ()=>{
    setPhoto(groupPressed, inputPhoto.files[0].lastModifiedDate, link)
    cerraruploadPhotoBg()
})

inputPhoto.onchange = function(){
    let file = inputPhoto.files[0]
    if (file.type == "image/png" || file.type == "image/jpg" || file.type == "image/svg+xml" || file.type == "image/jpeg"){
        createPreview(file)
    }
}
