function adicionar(valor) {
  const visor = document.getElementById('visor');

  if (visor.value === 'Erro') {
    visor.value = '';
  }

  visor.value += valor;
}

function limpar() {
  const visor = document.getElementById('visor');
  visor.value = '';
}

function calcular() {
  const visor = document.getElementById('visor');

  try {
    const resultado = Function('"use strict"; return (' + visor.value + ');')();
    visor.value = resultado;
  } catch (erro) {
    visor.value = 'Erro';
  }
}

const potencia = (base, expoente) => base ** expoente;
const raizQuadrada = (valor) => Math.sqrt(valor);
const resto = (dividendo, divisor) => dividendo % divisor;
const valorAbsoluto = (valor) => Math.abs(valor);
