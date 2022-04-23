// declaro todas las variables del signup
const form = document.querySelector("form");
const mail = document.querySelector(".mail");
const username = document.querySelector(".nombre");
const contra = document.querySelector(".contrasena");
const confirmacion = document.querySelector(".confirmacion");
const btnRegistrarse = document.querySelector(".registrarSubmit");

// lista de usuarios 
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let Cuser = 0
let Cmail = 0
let Ccontra = 0
let Cconfirmacion = 0


class user {
    constructor(mail,username,contrasena, id){
        this.mail = mail;
        this.username = username;
        this.contraseña = contrasena;
        this.id = id;
    }
}

