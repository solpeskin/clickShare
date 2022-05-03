// declaro todas las variables del signup
const form = document.querySelector("form");
const mail = document.querySelector(".mail");
const username = document.querySelector(".nombre");
const contra = document.querySelector(".contrasena");
const confirmacion = document.querySelector(".confirmacion");
const btnRegistrarse = document.querySelector(".registrarSubmit");
const inputs = document.querySelectorAll(".escribir");
 
// para registrarse.js 
//lista de usuarios
let usuarios = [];

// leer datos generales de firebase
db.collection("usuarios")
	.get()
	.then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
			usuarios.push(doc.data());
		});
	})
;


