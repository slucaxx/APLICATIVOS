// 1 - DOM
const tempo = document.querySelector('#tempo');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');
let segundos = 0;
let intervalo = null;

// 2 - EVENTOS
iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
zerar.addEventListener('click', zerarTempo);

// 3 - FUNÇÕES
function iniciarTempo() {
  // Faltava fechar o if e a função
  if (intervalo == null) {
    intervalo = setInterval(atualizarTempo, 1000);
  }
}

function atualizarTempo() {
  segundos++;
  let minutos = Math.floor(segundos / 60); // Removido o espaço extra
  let resto = segundos % 60;
  
  // Faltava fechar as chaves dos ifs
  if (minutos < 10) {
    minutos = '0' + minutos;
  }
  
  if (resto < 10) {
    resto = '0' + resto;
  }

  tempo.textContent = minutos + ':' + resto; // Removido o espaço extra
}

function pausarTempo() {
  // Faltava fechar a função
  clearInterval(intervalo);
  intervalo = null;
}

function zerarTempo() {
  // Faltava fechar a função
  pausarTempo();
  segundos = 0;
  tempo.textContent = '00:00';
}