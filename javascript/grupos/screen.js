cargarPagina()
function cargarPagina (){
    showOnScreen.innerHTML = `
            <div id="allGroups">
                <div class="addNewGroup" onclick="abrirAdd()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-plus-circle-fill " viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                      </svg>
                </div>
            </div>  `
    getUserGroups(currentUser.id)
}

function abrirCuenta(){
    showOnScreen.innerHTML = `
    <div class="account-settings">
                <div class="perfilImg">
                    <div class="IMGperfil">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle perfilCotent" viewBox="0 0 16 16" >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </div>
                    <div class="change-icon-div">
                        <input type="file" id="nuevo-fotoperfil" accept="image/*,.pdf image/*,.jpg image/*,.png image/*,.jpeg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                        </svg>
                    </div>
                </div>
                <label class="username-input-change" for="name">
                    <p>Nombre:</p>
                    <input type="text" id="nuevo-username" placeholder="" max="15" min="4" value="">
                </label>
                <label class="username-input-change" for="mail">
                    <p>Mail:</p>
                    <input type="email" required id="nuevo-usermail" placeholder="" value="">
                </label>
                <label for="submit">
                    <input type="submit" id="enviar-cambios" value="Guardar cambios">
                </label>

            </div>`

    addPlaceholder()
}

// cuando abro grupo
function openPhotos (group){
    groupPressed = userGroups.find(x => x.id == group)
    groupPosition = userGroups.indexOf(groupPressed)

    showOnScreen.innerHTML=`
    <div class="group-photos-section section-photos">
        <div class="infoGroup">
            <h6 id="nombreGrupo">${groupPressed.nombre}</h6>

            <!--participantes -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" id="list-participants" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
            </svg>
            <ul class="list-participants cerrado">
                <li>Participantes</li>
            </ul>

            <!-- compartir grupo -->
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-share-fill share-group"  onclick="abrirShareIdBg()" viewBox="0 0 16 16">
                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
            </svg>

            <!-- 3 puntos  -->
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-three-dots-vertical" id="cartel-opc-grupos" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
            <div class="cartel-opc-grupos cerrado" >
                <ul>
                    <li id="eliminar-grupo" onclick="salirGrupo(groupPressed)">Salir del grupo</li>
                    <li >Denunciar grupo</li>
                </ul>
            </div>

            <!-- icon agregar foto -->
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-image newPhoto" viewBox="0 0 16 16" onclick="abriruploadPhotoBg()">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
            </svg>
        </div>
        <div class="groupPhotos photosCSS">
        </div>
    </div>`
            
    // obtener fotos que ya están en el grupo
    groupPressed.fotos?.forEach(photo => {
        addNewPhoto(photo)
    });

    groupPressed.participantes.forEach(participante =>{
        let li = document.createElement("li")

        let p = usuarios.find(usuario => participante == usuario.id).nombre
        li.innerHTML = p
        document.querySelector(".list-participants").appendChild(li)
    })

}

// abrir todas las fotos 
function openAllPhotos(){
    showOnScreen.innerHTML = `
    <div class="all-photos-section section-photos">
        <h6>Todas las fotos</h6>
        <div class="allPhotos photosCSS">                   
        </div>
    </div>`

    userGroups.forEach(group=>{
        group.fotos.forEach(foto=>{
            document.querySelector(".allPhotos").innerHTML += domFoto(foto)
        })
    })

}

// abrir fotos likeadas
function openLikedPhotos(){
    showOnScreen.innerHTML = `
    <div class="photos-liked-section section-photos">
        <h6>Favoritas</h6>
        <div class="photosLiked photosCSS" ></div>
    </div>`

    userData.fotos.forEach(foto=>{
        if (foto.liked == true){

            userGroups.forEach(group=>{
                group.fotos.forEach(fotoData=>{
                    if (fotoData.id == foto.id){
                        document.querySelector(".photosLiked").innerHTML += domFoto(fotoData)
                    }
                })

            })
        }
    })

}
