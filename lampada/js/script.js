const lampada =document.querySelector("#lampada")
const btligar = document.querySelector("#bt1")
const btdesligar= document.querySelector("#bt2")

btligar.addEventListener("click",ligar)
btdesligar.addEventListener("click",desligar)

function ligar(){
    lampada.src ="imagens/acesa-1.png"
}

function desligar(){
    lampada.src="imagens/apagada-1.png"
}