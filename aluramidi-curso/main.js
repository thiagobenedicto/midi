const listaBotoes = document.querySelectorAll('.tecla');

console.log(listaBotoes);

function tocaSom(nomeClasse) {
  document.querySelector(`#som_${nomeClasse}`).play();
}

document.addEventListener('click', (e) => {
  // Pega o nome do elemento clicado
  let elementClass = e.target.className.split(' ');
  // Se o elemento clicado tem uma classe
  if (elementClass !== '') {
    tocaSom(elementClass[1]);
  }
  // Se o elemento não tem uma classe
  else {
    console.log('An element without a class was clicked');
  }
});

document.addEventListener('mousedown', (e) => {
  e.target.classList.add('ativa');
});

document.addEventListener('mouseup', (e) => {
  e.target.classList.remove('ativa');
});
