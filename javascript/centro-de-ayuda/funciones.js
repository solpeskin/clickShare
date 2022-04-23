// let preguntaBuscada = document.querySelector(".pregunta").value; 

// funciones 
function CrearPreguntas(pregunta, respuesta){
    elementPreg =  new preguntas (pregunta, respuesta);
    preguntasHechas.push (elementPreg);
    console.log (elementPreg);
}

// preguntas creadas 
// son ejemplos random porque todavía no se cuáles van a ser las preguntas 
CrearPreguntas(
    "¿De que color es el cielo?",
    "azul"
);
CrearPreguntas(
    "¿como me llamo?",
    "yo me llamo sol"
);

function Buscar(){ 
    console.log (preguntaBuscada);
    let preguntaEncontrada = "";

    preguntasHechas.forEach((pregunta) => {
        if (pregunta.pregunta.indexOf (preguntaBuscada) !==-1){
            preguntaEncontrada += 
            `${pregunta.pregunta} <br> 
            ${pregunta.respuesta}`;

            document.querySelector("#preguntas").innerHTML = preguntaEncontrada;

        }
    } );
};



