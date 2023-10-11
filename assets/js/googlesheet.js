const scriptURL = 'https://script.google.com/macros/s/AKfycbw5wTNVOIRsWpr9v8hI98GN5kTRsn7KfWNkgc7FXEtGx7CnTLzl-MUo3SZky7fgmT_k/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Seu cadastro foi realizado! Obrigado por apoiar nosso jogo ;)" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})