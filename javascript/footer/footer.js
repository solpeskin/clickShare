// footer 
let comentariosPublicados = localStorage.getItem("comentarios");
let comentariosFooter = [comentariosPublicados];

pickLink ()
document.querySelector(".mandar").addEventListener("click", ()=> mandar() );

function mandar() {
    let comentario = document.querySelector(".comentarios").value.trim();
    let texto = document.getElementById("graciasTexto");

    if (comentario !== "" ){
        comentariosFooter.push(comentario);
        localStorage.setItem("comentarios", comentariosFooter);

        gracias(texto);

    }

    document.querySelector(".comentarios").value = "";
};

function gracias(texto) {
    texto.innerHTML = "¡Gracias por su comentario!";
    texto.setAttribute ("class", "graciasComentario");

    document.querySelector(".comentarios").addEventListener("input" ,()=>texto.innerHTML = "");
}

