function validateEmail(email) {
  if(!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)){
    const err = new Error('Invalid email.')
    err.input = 'email'
    throw err
  }
}

function validatePassword(password) {
  if (
    password.lenght < 8 || 
    !password.match(/[a-z]/) ||
    !password.match(/[A-Z]/) ||
    !password.match(/[\d]/) ||
    !password.match(/[^a-zA-Z\s0-9]/)
  ) {
    const err = new Error('Invalid password')
    err.input = 'password'
    throw err
  }
}

function resetFormStyles(inputs) {
  Object.entries(inputs).forEach(([key, value]) => {
      value.classList.remove('succes', 'error')
      document.querySelector(`#${key}-error`).textContent = ''
  })
}

const userInputs = {
  name: document.querySelector('#name'),
  email: document.querySelector('#email'),
  password: document.querySelector('#password')
}

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  resetFormStyles(userInputs)
  try{
    userInputs.name.classList.add('success')
    validateEmail(userInputs.email.value)
    userInputs.email.classList.add('success')
    validatePassword(userInputs.password.value)
    userInputs.password.classList.add('success')
  } catch (err) {
    userInputs[err.input].classList.add('error')
    document.querySelector(`#${err.input}-error`).textContent = err.message
  }
})