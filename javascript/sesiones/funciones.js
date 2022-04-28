// textos error
function submitError (input, message) {
    input.innerHTML = message;
    input.addEventListener("input", ()=> examinarDatos())
}

function submitNoError (input) {
    input.innerHTML = "";
}

function searchUser (){
    return usuarios.find((user) => user?.username === username?.value);
}

function searchMail (){
    return usuarios.find((user) => user?.mail === mail?.value);
}