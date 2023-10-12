const scriptURL = 'https://script.google.com/macros/s/AKfycbw5wTNVOIRsWpr9v8hI98GN5kTRsn7KfWNkgc7FXEtGx7CnTLzl-MUo3SZky7fgmT_k/exec'

const formDeleteContact = document.forms['delete-form']

formDeleteContact.addEventListener('submit', e => {
 e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(formDeleteContact)})
  .then(response => alert("Seu cadastro foi removido! ;(" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
  console.log("asd")
});