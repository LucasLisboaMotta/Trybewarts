const botaoEntrar = document.getElementsByTagName('button')[0];
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const botaoEnviar = document.getElementById('submit-btn');
const inputAgreement = document.getElementById('agreement');
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');

function verificarEmailESenha() {
  if (inputSenha.value === '123456' && inputEmail.value === 'tryber@teste.com') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function desbloquearBotao() {
  if (botaoEnviar.disabled) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}

function decrementaNumero() {
  const numero = 500 - textArea.value.length;
  counter.innerText = numero.toString();
}


inputAgreement.addEventListener('change', desbloquearBotao);
botaoEntrar.addEventListener('click', verificarEmailESenha);
textArea.addEventListener('keyup', decrementaNumero);
