
// DOM 
const horas=document.querySelector("#horas")
const minutos=document.querySelector("#minutos")
const segundos=document.querySelector("#segundos")
const diatopo=document.querySelector("#dia-topo")
const mestopo=document.querySelector("#mes-topo")
const anotopo =document.querySelector("#ano-topo")
const diacard=document.querySelector("#dia-card")
const mescard =document.querySelector("#mes-card")
const anocard=document.querySelector("#ano-card")
const mensagem=document.querySelector("#mensagem")




function relogio(){
    lais = new Date()
    h=lais.getHours()
    m=lais.getMinutes()
    s=lais.getSeconds()
    d=lais.getDate()
    me=lais.getMonth() + 1;
    a=lais.getFullYear()
    
    
    
    if(h >= 5 && h <12) {
        mensagem.textContent = "  BOM DIA!"
    } else if (h >=12 && h <18) {
        mensagem.textContent= " ☀️ BOA TARDE!"
    } else {
        mensagem.textContent =" 🌙 BOA NOITE!"
    }
    
    if(h<10){
        h="0" + h
    }
    if(m<10){
        m="0" + m
    }
    if(s<10){
        s="0" + s
    }
    if (me < 10){
        me = "0" + me;
    }
    
    horas.textContent=h
    minutos.textContent=m
    segundos.textContent=s
    if (diatopo) diatopo.textContent = d;
    if (mestopo) mestopo.textContent = me;
    if (anotopo) anotopo.textContent = a;

  
    if (diacard) diacard.textContent = d;
    if (mescard) mescard.textContent = me;
    if (anocard) anocard.textContent = a;
}
    
    
    relogio()
    
    // AÇAÕ 
    setInterval(relogio,1000)
