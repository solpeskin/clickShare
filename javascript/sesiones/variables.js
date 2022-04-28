// declaro todas las variables del signup
const form = document.querySelector("form");
const mail = document.querySelector(".mail");
const username = document.querySelector(".nombre");
const contra = document.querySelector(".contrasena");
const confirmacion = document.querySelector(".confirmacion");
const btnRegistrarse = document.querySelector(".registrarSubmit");
const inputs = document.querySelectorAll(".escribir")

// lista de usuarios 
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

class user {
    constructor(mail,username,contrasena, id){
        this.mail = mail;
        this.username = username;
        this.contraseña = contrasena;
        this.id = id;
    }
}

