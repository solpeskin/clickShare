let link;

// array con fotos de cada grupo
let userGroupsPhotos = []

if (groupPressed){
    getUserGroupsPhotos(groupPressed)
}

function getUserGroupsPhotos(group) {
	db.collection("grupos")
		.doc(`${group}`) 
		.get()
		.then((res) => {
            userGroupsPhotos = res.data().fotos || []
            let eachgroupPhotos = res.data().fotos || []

            eachgroupPhotos?.forEach(photo => {
                console.log (getUserFromPhoto(photo.user))
                addNewPhoto(photo.link)
            });
		})
    ;
}

function getUserFromPhoto (userID){
    return db.collection("usuarios").doc(`${userID}`).get()
        .then((res) => {
            return res.data().nombre
		})
        
        
    ;
}


function addNewPhoto (photolink){
    const newPhotoHTML = `    
    <div class="IMG">
        <img src="${photolink}" alt="foto grupos">
        <div class= "hoverIMG">
            <p class="person-uploaded"></p>
        </div>
    </div>
    `
    photosOnHTML.innerHTML += (newPhotoHTML)
}

// cuando abro grupo
function openPhotos (group){
    // se muestra página de grupo
    groupPhotos.classList.remove("displayNone")
    allGroups.classList.add("displayNone")
    
    groupPressed = group;

    // obtener fotos que ya están en el grupo
    getUserGroupsPhotos(groupPressed)

    db.collection("grupos")
    .doc(`${group}`) 
    .get()
    .then((res)=>{
        document.getElementById("nombreGrupo").innerHTML = res.data().nombre
    })
}

// subir foto a fb
function setPhoto (group, date, link){
    let newPhotoJS = {
        user: `${currentUser.id}`,
        link: `${link}`,
        date: `${date}`,
    }
    
    userGroupsPhotos.push(newPhotoJS)
    addNewPhoto(link)

    db.collection("grupos")
		.doc(`${group}`)
		.update({
			fotos: userGroupsPhotos,
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