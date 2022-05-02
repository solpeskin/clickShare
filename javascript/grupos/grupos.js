function generarID (){
    return 'xxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// crear grupo en html
function domGrupo(grupo){
    const nuevoGrupoHTML = ` <div class="grupoInfo">
                                <div class="grupoIMG"></div>
                                <h6>${grupo.name}</h6>
                            </div>`

    document.querySelector("#allGroups").innerHTML += (nuevoGrupoHTML)
}

// registrar grupo 
function crearGrupo (){
    if (nombreGrupo.value.trim()){
        let newGrupo = new grupo (nombreGrupo.value.trim(), generarID(), "");
        gruposCreados.push(newGrupo);

        console.log (gruposCreados)
        
        cerrarAñadir()
        domGrupo(newGrupo);
    }
}

// cerrar y abrir cartel para añadir grupos 
function cerrarAñadir(){
    añadirGrupo.classList.remove("displayGrupos")
    console.log("cerrar")
    nombreGrupo.value = "";
}

function abrirAñadir (){
    añadirGrupo.classList.add("displayGrupos")
    console.log("crear")
}


btnCrear.addEventListener("click", ()=> crearGrupo())
