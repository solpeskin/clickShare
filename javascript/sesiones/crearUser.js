// si esta todo onkeydown, crear user
function crearUser (){
    if (datoUsuario() && datoMail() && datoContra() && confirmarContra()){
        inputs.forEach((e)=> e.toggleAttribute("disabled"))

        setTimeout(()=>{
            let usuario = new user (datoMail(), datoUsuario(), datoContra(), generarId());
            usuarios.push(usuario)
            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            window.location.assign("iniciar-sesion.html")
        }, 1500)
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