const lightmodeBtn = document.querySelector(".lightmode");
const bodyGrupos = document.getElementById("gruposBody")

let lightmode = localStorage.getItem("lightmode") || "light";
bodyGrupos.classList.add(lightmode)

function changeMode (){
    console.log("boton apretado")

    if (lightmode=="light"){
        console.log("boton chequea light")
        bodyGrupos.classList.add("dark")
        bodyGrupos.classList.remove("light")
        lightmode = "dark"
        localStorage.setItem("lightmode", "dark")
    }

    else if (lightmode=="dark"){
        console.log("boton chequea dark")
        bodyGrupos.classList.add("light")
        bodyGrupos.classList.remove("dark")
        lightmode = "light"
    }

    localStorage.setItem("lightmode", lightmode);
    console.log(lightmode)
}

lightmodeBtn.addEventListener ("click", ()=>{
    changeMode()        
}) 
