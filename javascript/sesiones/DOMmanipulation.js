// textos error
function submitError (input, message) {
    input.innerHTML = message;
    input.addEventListener("input", ()=> examinarDatos())
}

function submitNoError (input) {
    input.innerHTML = "";
}