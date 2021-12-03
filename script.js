const buttonEnter = document.getElementById('button-enter');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const buttonSend = document.getElementById('submit-btn');
const inputAgreement = document.getElementById('agreement');
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const select = document.getElementById('house');
const family = document.getElementById('column');
const subjects = document.getElementById('column2');
const evaluation = document.getElementById('line3');
const list = document.getElementById('lista-pronta');
const bntSubmit = document.getElementById('submit-btn');

function checkEmailAndPassword() {
  if (inputSenha.value === '123456' && inputEmail.value === 'tryber@teste.com') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function unlockButton() {
  if (buttonSend.disabled) {
    buttonSend.disabled = false;
  } else {
    buttonSend.disabled = true;
  }
}

function decreaseNumber() {
  const numero = 500 - textArea.value.length;
  counter.innerText = numero;
}

function familySelected() {
  for (let i = 1; i < family.children.length; i += 1) {
    if (family.children[i].children[0].checked) {
      return family.children[i].children[0].value;
    }
  }
}

function materiasSelecionadas() {
  const materias = [];
  for (let i = 1; i < subjects.children.length; i += 1) {
    if (subjects.children[i].children[0].checked) {
      materias.push(subjects.children[i].children[0].value);
    }
  } return materias.join(', ');
}

function evaluatedNote() {
  for (let i = 0; i < evaluation.children.length; i += 1) {
    if (evaluation.children[i].checked) {
      return evaluation.children[i].value;
    }
  }
}

function returnList(evento) {
  evento.preventDefault();
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const casa = select.options[select.selectedIndex].value;
  const familia = familySelected();
  const materias = materiasSelecionadas();
  const avaliacao = evaluatedNote();
  const observacao = textArea.value;

  list.children[0].innerText = `Nome: ${nome} ${sobrenome}`;
  list.children[1].innerText = `Email: ${email}`;
  list.children[2].innerText = `Casa: ${casa}`;
  list.children[3].innerText = `Família: ${familia}`;
  list.children[4].innerText = `Matérias: ${materias}`;
  list.children[5].innerText = `Avaliação: ${avaliacao}`;
  list.children[6].innerText = `Observações: ${observacao}`;
}

inputAgreement.addEventListener('change', unlockButton);
buttonEnter.addEventListener('click', checkEmailAndPassword);
textArea.addEventListener('keyup', decreaseNumber);
bntSubmit.addEventListener('click', returnList);
