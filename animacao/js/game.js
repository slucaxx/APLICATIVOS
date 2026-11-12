// DOM
const bola= document.querySelector("#caixa")


// EVENTO

document.addEventListener("keydown",animar)


// FUNÇÃO

function animar(evento){

    if(evento.key =="ArrowUp"){
        bola.classList.add ("bolaPular")
    }
     if(evento.key =="ArrowDown"){
        bola.classList.remove("bolaPular")
    }

}