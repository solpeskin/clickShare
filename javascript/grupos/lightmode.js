const lightmodeBtn = document.querySelector(".lightmode");
const bodyGrupos = document.getElementById("gruposBody")

let lightmode = localStorage.getItem("lightmode") || "light";
bodyGrupos.classList.add(lightmode)

function changeMode (){
    console.log("boton apretado")

    if (lightmode=="light"){
        bodyGrupos.classList.add("dark")
        bodyGrupos.classList.remove("light")
        lightmode = "dark"
    }

    else if (lightmode=="dark"){
        bodyGrupos.classList.add("light")
        bodyGrupos.classList.remove("dark")
        lightmode = "light"
    }

    localStorage.setItem("lightmode", lightmode);
}

lightmodeBtn.addEventListener ("click", ()=>{
    changeMode()        
}) 


