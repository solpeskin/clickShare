const gruposAppend = document.querySelector(".grupos");
let grupos = [];

function checkearGrupos (){
    if (grupos.length == 0){
        gruposAppend.innerHTML = '<p class="aviso">Todavía no tienes ningún grupo ...</p>';
    }
}

checkearGrupos ()
