// screen 
const showOnScreen = document.querySelector(".grupos")

// grupos screen
// crear grupo
const addGrupo = document.querySelector(".addGrupo");
const salir = document.querySelector(".cancelGroups")

// grupos 
const allGroups = document.querySelector("#allGroups");
const newPhoto = document.querySelector(".newPhoto");

// form para crear o grupo
const nombreGrupo = document.querySelector(".nombreGrupo");
const idGrupo = document.querySelector(".idGrupo");
const btnCrear = document.querySelector("#btnCrear")
const btnUnir = document.querySelector("#btnUnir")

// cartel que muestra id 
const shareIdDIV = document.querySelector(".shareGroupId-bg")

// cartel para subir foto
const uploadPhotoBg = document.querySelector(".uploadPhoto-bg");
const sendPhoto = document.querySelector(".send-photo")
const inputPhoto = document.querySelector(".photoFile")
const dragZone = document.querySelector(".upload-img_button")

// editar foto grupo
const previewSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>`

let userGroups = []; // todos los grupos con la data dentro
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
    userGroups = []
    userData = ""

	db.collection("usuarios")
		.doc(`${username}`) 
		.get()
		.then((res) => {
            userData = res.data()
            currentUser = userData
            
            userData.grupos.forEach((group)=>{
                searchGroupByID(group)
            })

		})
    ;
}

function eliminarCuenta (){
    db.collection("usuarios").doc(`${userData.id}`).delete()
    window.location.assign("../../index.html")
}

