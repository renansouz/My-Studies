const email = document.getElementById('email').value
const errorElement = document.querySelector('.error')

let emailRegex = /^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]{2,}+\.[a-zA-Z]{2,}$/

let errors = []

if (!emailRegex.test(email)) {
  errors.push('email inválido.')
}

if (errors.lenght > 0) {
  errorElement.textContent = errors.join(' ')
} else {
  errorElement.textContent = ''
}