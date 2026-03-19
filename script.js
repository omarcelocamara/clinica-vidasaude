// script.js - Clínica VidaSaúde

// Destaca o link ativo no menu conforme a página atual
document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('nav a');
  var paginaAtual = window.location.pathname.split('/').pop();

  links.forEach(function(link) {
    var href = link.getAttribute('href');
    if (href === paginaAtual) {
      link.classList.add('ativo');
    }
  });
});

// Define data mínima para agendamento (hoje)
var inputData = document.getElementById('data-consulta');
if (inputData) {
  var hoje = new Date();
  var dd = String(hoje.getDate()).padStart(2, '0');
  var mm = String(hoje.getMonth() + 1).padStart(2, '0');
  var yyyy = hoje.getFullYear();
  inputData.min = yyyy + '-' + mm + '-' + dd;
}

// Define data máxima de nascimento (hoje)
var inputNasc = document.getElementById('nascimento');
if (inputNasc) {
  var hoje2 = new Date();
  var dd2 = String(hoje2.getDate()).padStart(2, '0');
  var mm2 = String(hoje2.getMonth() + 1).padStart(2, '0');
  var yyyy2 = hoje2.getFullYear();
  inputNasc.max = yyyy2 + '-' + mm2 + '-' + dd2;
}
