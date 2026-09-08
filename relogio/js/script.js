// DOM
const horas =document.querySelector("#horas")
const minutos =document.querySelector("#minutos")
const segundos =document.querySelector("#segundos")

// EVENTO
setInterval(relogio,1000)

// ACÃO
function relogio(){
    lais=new Date()
    l=lais.getHours()
    a=lais.getMinutes()
    i=lais.getSeconds()
     
if(l<10){
        l='0'+l
 }
if(a<10){
        a='0'+a
 }
if(i<10){
        i='0'+i
 }
    
    horas.textContent=l
    minutos.textContent=a
    segundos.textContent=i

}