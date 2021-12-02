const botaoEntrar = document.getElementsByTagName('button')[0];
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');

function verificarEmailESenha() {
  if (inputSenha.value === '123456' && inputEmail.value === 'tryber@teste.com') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botaoEntrar.addEventListener('click', verificarEmailESenha);
