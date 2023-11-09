const scriptURL = 'https://script.google.com/macros/s/AKfycbw5wTNVOIRsWpr9v8hI98GN5kTRsn7KfWNkgc7FXEtGx7CnTLzl-MUo3SZky7fgmT_k/exec'

const form = document.forms['contact-form']
const formName = form.getAttribute('name');

form.addEventListener('submit', e => {
  e.preventDefault()

  const formData = new FormData(form);
  formData.append('formName', formName);

  fetch(scriptURL, { method: 'POST', body: formData })
  .then(response => alert("Seu cadastro foi realizado! Obrigado por apoiar nosso jogo ;)" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})