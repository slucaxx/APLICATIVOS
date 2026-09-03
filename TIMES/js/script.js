const alvo=document.querySelector("#alvo")
const btbahia=document.querySelector("#bt1")
const btvitoria=document.querySelector("#bt2")
const btreal=document.querySelector("#bt3")
const btroma=document.querySelector("#bt4")
const btarsenal=document.querySelector("#bt5")

btbahia.addEventListener("click",bahia)
btvitoria.addEventListener("click",vitoria)
btreal.addEventListener("click",realmadrid)
btroma.addEventListener("click",roma)
btarsenal.addEventListener("click",arsenal)

function bahia(){
    alvo.src ="imagens/bahia.webp"
}

function vitoria(){
    alvo.src="imagens/vitoria.jpg"
}

function realmadrid(){
    alvo.src="imagens/images.jpg"
}

function roma(){
    alvo.src="imagens/roma.jpg"

}

function arsenal (){
    alvo.src="imagens/arsenal.jpg"
}