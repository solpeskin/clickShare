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
