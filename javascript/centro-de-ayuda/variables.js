// variables :
let preguntasHechas = [
    {pregunta: "¿Cómo uso la app?", respuesta: "la app la usas usándola" }
];

// clases
class preguntas {

    constructor (pregunta, respuesta){
        this.pregunta = pregunta
        this.respuesta = respuesta
    }
}

let url = "../base-datos/preguntas.json"

fetch(url)
.then(res => res.json())
.then(data => console.log(data))

