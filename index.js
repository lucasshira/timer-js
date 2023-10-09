const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let horas = 0;
let minutos = 0;
let segundos = 0;
let intervalo;

function atualizarRelogio() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
  }

  const tempoFormatado = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  relogio.innerHTML = tempoFormatado;
}

iniciar.addEventListener('click', function () {
  intervalo = setInterval(atualizarRelogio, 1000);
  iniciar.disabled = true;
  pausar.disabled = false;
  zerar.disabled = false;
  relogio.style.color = 'black';
});

pausar.addEventListener('click', function () {
  clearInterval(intervalo);
  iniciar.disabled = false;
  pausar.disabled = true;
  relogio.style.color = 'red';
});

zerar.addEventListener('click', function () {
  clearInterval(intervalo);
  horas = 0;
  minutos = 0;
  segundos = 0;
  const tempoFormatado = '00:00:00';
  relogio.innerHTML = tempoFormatado;
  iniciar.disabled = false;
  pausar.disabled = true;
  relogio.style.color = 'black';
});