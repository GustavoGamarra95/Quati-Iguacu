// Funcionalidade do botão do idioma

(function() {
  // Vincula o evento de clique ao botão de navegação dropdown
  document.querySelector('.nav-button').addEventListener('click', function() {
      /* Alterna a classe CSS 'closed', que reduz a altura da UL, escondendo todos os LI, exceto o primeiro */
      this.parentNode.parentNode.classList.toggle('closed')
  }, false);
})();

// se encerra aqui



// Suponha que 'dropdown' seja o seu elemento dropdown
var dropdown = document.querySelector('.drop-down');

// Adicione um evento de clique ao documento
document.addEventListener('click', function(event) {
    var isClickInside = dropdown.contains(event.target);

    // Se o clique foi fora do dropdown, feche-o
    if (!isClickInside) {
        dropdown.classList.add('closed');
    }
});

