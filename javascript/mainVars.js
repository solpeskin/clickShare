let currentUser = JSON.parse(localStorage.getItem("currentUser")) ;

// btn atras 
let currentPag = document.getElementById("Pindex")? "../../index.html" : document.querySelector(".centro-ayuda")? "footer/centro-de-ayuda.html" : document.querySelector(".body-tuto")? "footer/tutoriales.html" : document.querySelector(".politica-priv")? "footer/politica-priv.html" : localStorage.getItem("historial");
localStorage.setItem("historial", currentPag)


class user {
    constructor(mail,username,contrasena, grupos){
        this.mail = mail;
        this.username = username;
        this.contraseña = contrasena;
        this.grupos = grupos;
    }
}



