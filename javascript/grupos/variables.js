// grupos
const nombreGrupo = document.querySelector(".nombreGrupo");
const idGrupo = document.querySelector(".idGrupo");
const crearGrupoBtn = document.lastChild.querySelector(".crearGrupo");
const addGrupo = document.querySelector(".addGrupo");
const salir = document.querySelector(".cancelGroups")
const btnCrear = document.querySelector("#btnCrear")

// fotos
const groupPhotos = document.querySelector(".groupPhotos");
const allGroups = document.querySelector("#allGroups");
const newPhoto = document.querySelector(".newPhoto");
const uploadPhotoBg = document.querySelector(".uploadPhoto-bg");
const sendPhoto = document.querySelector(".send-photo")
const inputPhoto = document.querySelector(".photoFile")
const dragZone = document.querySelector(".upload-img_button")
const photosOnHTML = document.querySelector(".photos")


let userGroups = []; 
let groupPressed ;
let userData ;


// lightmode
const lightmodeBtn = document.querySelector(".lightmode");
const bodyGrupos = document.getElementById("gruposBody")

let lightmode = localStorage.getItem("lightmode") || "light";
bodyGrupos.classList.add(lightmode)

// perfil 
const fotoPerfil = document.querySelector(".fotoPerfil") 
const nombreUsuarioTxt = document.querySelector(".nombreUsuario");
const optionsPerfil = document.querySelector(".perfil-options")
const cerrarSesionBtn = document.querySelector("#cerrarSesion");

if ( !db.collection("usuarios").doc(`${currentUser.nombre}`) ){
    window.location.assign("../index.html")
}

// get user data 
function getUserGroups(username) {
	db.collection("usuarios")
		.doc(`${username}`) 
		.get()
		.then((res) => {
            userData = res.data()
            userGroups = userData.grupos || []
            userGroups.forEach((group)=>{
                searchGroupByID(group)
            })

		})
    ;
}
