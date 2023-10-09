// Funcionalidade do botão do idioma

(function() {
    // Bind Click event to the drop down navigation button
    document.querySelector('.nav-button').addEventListener('click', function() {
      /*  Toggle the CSS closed class which reduces the height of the UL thus 
          hiding all LI apart from the first */
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

