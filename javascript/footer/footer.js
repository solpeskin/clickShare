// footer 
let comentariosPublicados = []
let lastComment = "";
getComments();
pickLink ()

// get user data 
function getComments() {
	db.collection("comentarios")
		.doc("comentarios") 
		.get()
		.then((res) => {
            comentariosPublicados = res.data().comentario
		})
    ;
}

function mandar() {
    let comentario = document.querySelector(".comentarios").value.trim();
    let texto = document.getElementById("graciasTexto");

    if (comentario !== "" ){
        comentariosPublicados.push(comentario);
        uploadComment(comentariosPublicados)
        gracias(texto);

    }

    document.querySelector(".comentarios").value = "";
};

function gracias(texto) {
    texto.innerHTML = "¡Gracias por su comentario!";
    texto.setAttribute ("class", "graciasComentario");

    document.querySelector(".comentarios").addEventListener("input" ,()=>texto.innerHTML = "");
}

function uploadComment(comment) {
    // subir comentario aray de comentarios 
	db.collection("comentarios")
		.doc("comentarios")
		.update({
			comentario: comment,
		})
} 

