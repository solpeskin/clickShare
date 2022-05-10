function showQuestions(data){
    data.forEach(e=>{
        const div = document.createElement("div")
        div.classList.add("preguntas")
        
        e.contenedor.forEach(e=>{
            div.innerHTML += DOMquestion(e.pregunta, e.respuesta)
        })

        document.querySelector(".todas-pregs").appendChild(div)
    });

}

function DOMquestion (que, ans){
    let dom = `
            <div class="contenedores">
                <p class="que">${que}</p>
                <p class="ans">${ans}</p>
            </div>`


    return dom
}