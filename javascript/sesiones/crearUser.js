// si esta todo onkeydown, crear user
function crearUser (){
    if (Cuser + Cmail + Ccontra + Cconfirmacion === 4 ){
        let usuario = new user (mail.value, username.value, contra.value, generarId());
        document.querySelector(".registrarSubmit").href = "iniciar-sesion.html";

        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        window.location.assign ("iniciar-sesion.html");
    }
}

// generar id 
const generarId = function uid() {
    return (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"");
};

// buscar id 
function buscarId (id){
    const idEncontrado = usuarios.findIndex((user)=>user.id == id);
    return idEncontrado;
}