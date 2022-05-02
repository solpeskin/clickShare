// grupos
const nombreGrupo = document.querySelector(".nombreGrupo");
const idGrupo = document.querySelector(".idGrupo");
const crearGrupoBtn = document.lastChild.querySelector(".crearGrupo");
const añadirGrupo = document.querySelector(".añadirGrupo");
const nuevoGrupo = document.querySelector(".nuevoGrupo");
const salir = document.querySelector(".cancelGroups")
const btnCrear = document.querySelector("#btnCrear")

class grupo { 
    constructor (name, id, foto){
        this.name = name;
        this.id = id;
        this.foto = foto;
    }
}

let gruposCreados = currentUser.grupos;

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

