const distancia=document.querySelector("#distancia")
const consumo =document.querySelector("#consumo")
const preco=document.querySelector("#preco")
const resultado1=document.querySelector("#resultado1")
const calcular =document.querySelector("#botao")

calcular.addEventListener("click",viagem)

function viagem (){
    d=Number(distancia.value)
    c=Number(consumo.value)
    p=Number(preco.value)
    cal=(d/c)*p

    resultado1.textContent= ` O valor a gastar é  R$ ${cal.toFixed(2)}`
}
