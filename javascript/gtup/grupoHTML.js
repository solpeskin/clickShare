function cssGrupo (){

}

function crearGrupo (){
    let grupoHTML = `    
    <div class="grupo">
        <div class="img-grupo"></div>
        <h6 class="nombre-grupo"></h6>
    </div>`

    cssGrupo()
    const seccionGrupos = document.getElementById("grupos");
    seccionGrupos.appendChild(grupoHTML);
}