const paginasIndex = ["", "src/paginas/footer/", "./src/", "src/paginas/"]
const paginasSrc = ["../../../index.html", "./", "../../", "../"];

function headerHTML (link){
    let headerDOM = document.querySelector ("header");
    headerDOM.innerHTML = 
        `<nav class="menu-mobile submenuOff"> 
            <svg class="bi bi-list list-mobile" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-x-lg cancel" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
            </svg>
            <div class= "allMenu">
                <div class="menu-paginas"> 
                    <a href="${link[0]}#inicio" class="clickshare" >CLICK&SHARE</a>
                    <ul class="items-menu ">  
                        <li class="botonHeader  "><a href="${link[0]}#pasos" >Pasos</a></li>
                        <li class="botonHeader"><a class= "black" href="${link[0]}#ustedes">Ustedes</a></li>
                        <li class="botonHeader help"  "><a class= "black" href="${link[1]}centro-de-ayuda.html">Ayuda</a></li>
                    </ul>
                </div> 
                <div class="espacio"></div>
                <div class="botones">
                    <a href="${link[2]}paginas/iniciar-sesion.html"><button class="botonHeader iniciar-sesion  ">Iniciar sesión</button></a> 
                    <a href="${link[2]}paginas/registrar.html"><button class="botonHeader registrarse ">Registrarse</button></a>
                </div> 
            </div>                      
        </nav> 
            `
}

function pickLink (){
    document.getElementById("Pindex")&&headerHTML(paginasIndex) ;
    document.getElementById("Pfooter")&&headerHTML(paginasSrc);
}

pickLink();


// animacion header scroll
const body = document.body;
const header = document.querySelector(".header1")

// const cuando = (document.getElementById("Pindex"))? 800:(document.getElementById("Pfooter"))? 50: "";
const cuando = 100;

let lastScroll = cuando;
 
window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > cuando){
        if (currentScroll>lastScroll){
            header.classList.add ("scrollDown")
            header.classList.remove("scrollUp")
        }
    
        if (currentScroll<lastScroll){
            header.classList.add("scrollUp")
            header.classList.remove("scrollDown")
        }
    
        lastScroll = currentScroll;
    }
    
});

// si ya esta iniciada la sesion
const botones = document.querySelector(".botones")

if (currentUser){
    if (document.getElementById("Pindex")){
        botones.innerHTML = `<a href="${paginasIndex[3]}grupos.html"><button class="botonHeader  ">Ir a grupos</button></a> `;
    }

    if (document.getElementById("Pfooter")){
        botones.innerHTML = `<a href="${paginasSrc[3]}grupos.html"><button class="botonHeader  ">Ir a grupos</button></a> `;
    }
}

