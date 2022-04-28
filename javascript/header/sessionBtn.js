const botones = document.querySelector(".botones")

if (currentUser){
    botones.innerHTML = '<a href="src/paginas/grupos.html"><button class="botonHeader  ">Ir a grupos</button></a> ';
}