const peso =document.querySelector("#peso")
const altura =document.querySelector("#altura")
const calcular=document.querySelector("#botao")
const resultado1=document.querySelector("#resultado1")
const resultado2=document.querySelector("#resultado2")

calcular.addEventListener("click",imc)


function imc() {
    p=Number(peso.value)
    a=Number(altura.value)
    s=p /(a*a)

    resultado1.textContent= ` O seu IMC é ${s.toFixed(2)}`

    if(s<18.5){
        resultado2.textContent=` Você é magro`
    } else if (s >=18.5 && s <25){
        resultado2.textContent= `Peso ideal`
    }else  if(s >25.5 && s <30 ){
        resultado2.textContent=`Você esta com Sobrepeso`
    } else {
        resultado2.textContent=`Obesidade`
    }
}