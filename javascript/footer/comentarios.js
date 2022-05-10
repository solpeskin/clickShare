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

// mostrar comentario en index 
function showComment() {
    document.getElementById("comment1").innerHTML = randomComment()
    document.getElementById("comment2").innerHTML = randomComment()
}