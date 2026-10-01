const pre =document.querySelector("#preco")
const qua =document.querySelector("#quantidade")
const des =document.querySelector("#desconto")
const botao =document.querySelector("#botao")
const resu =document.querySelector("#resultado1")

botao.addEventListener("click",formula)

function formula(){
    n1=Number(pre.value)
    n2=Number(qua.value)
    n3=Number(des.value)

    calculo =(n1*n2) - ((n1*n2) *(n3/100))
    resultado1.textContent = `valor final:R$ ${calculo.toFixed(2)}`
    
}