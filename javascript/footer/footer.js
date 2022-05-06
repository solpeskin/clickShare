// footer 
let comentariosPublicados = []
let lastComment = "";
getComments();
pickLink ()

setInterval(()=>{
    showComment()
}, 5000)

document.querySelector(".mandar").addEventListener("click", ()=> mandar() );

function randomComment (){
    let random = comentariosPublicados[Math.floor(Math.random() * comentariosPublicados.length )]

    if (random == lastComment){
        return randomComment()
    }

    else {
        lastComment = random
        return random
    }
}

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

// mostrar comentario en index 
function showComment() {
    document.getElementById("comment1").innerHTML = randomComment()
    document.getElementById("comment2").innerHTML = randomComment()
}