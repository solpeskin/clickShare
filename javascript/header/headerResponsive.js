const cancel = document.querySelector(".cancel")
const listMobile = document.querySelector(".list-mobile")
const submenu = document.querySelector(".menu-mobile")
const botonesHeader = document.querySelectorAll(".botonHeader")

cancel.addEventListener("click", ()=>{
    submenu.classList.add("submenuOff")
    submenu.classList.remove("submenuOn")
})

botonesHeader.forEach ((e)=>{
    e.addEventListener("click", ()=>{
        submenu.classList.add("submenuOff")
        submenu.classList.remove("submenuOn")
    })
})

listMobile.addEventListener("click", ()=>{
    submenu.classList.remove("submenuOff")
    submenu.classList.add("submenuOn")
})

