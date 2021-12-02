const botaoEntrar = document.getElementsByTagName('button')[0];
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const botaoEnviar = document.getElementById('submit-btn');
const inputAgreement = document.getElementById('agreement');
let verificar = false;

function verificarEmailESenha() {
  if (inputSenha.value === '123456' && inputEmail.value === 'tryber@teste.com') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function desbloquearBotao() {
  if (!verificar) {
    botaoEnviar.disabled = false;
    verificar = true;
  } else {
    botaoEnviar.disabled = true;
    verificar = false;
  }
}

inputAgreement.addEventListener('change', desbloquearBotao);
botaoEntrar.addEventListener('click', verificarEmailESenha);
