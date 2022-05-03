function showQuestions(data){
    data.forEach(e => {
        DOMquestion(e.pregunta, e.respuesta)  
    });
}

function DOMquestion (que, ans){
    const donde = document.getElementById("questions")
    const div = document.createElement("div")
    let dom = `<h6 class="pregunta">${que}</h6>
                <h6 class="respuesta">${ans}</h6>`

    div.innerHTML = dom;
    donde.appendChild(div);
}