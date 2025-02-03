document.addEventListener('DOMContentLoaded', function () {
  const loggedInUser = JSON.parse(localStorage.getItem('currentUser')) || JSON.parse(sessionStorage.getItem('currentUser'));

  if (loggedInUser) {
    window.location.href = '../Home/'; 
  }
});

const loginForm = document.getElementById('loginForm')

loginForm.addEventListener('submit', function(event){
  event.preventDefault();

  const email = document.getElementById('loginEmail').value
  const password = document.getElementById('loginPassword').value
  const rememberMe = document.getElementById('rememberMe').checked
  const divError = document.getElementById('error')

  const users = JSON.parse(localStorage.getItem('users')) || []
  const user = users.find(user => user.email === email && user.password === password)

  if(user) {
    alert(`welcome, ${user.firstName}!`)
    if (rememberMe) {
      localStorage.setItem('currentUser', JSON.stringify(user))
    } else [
      sessionStorage.setItem('currentUser', JSON.stringify(user))
    ]
    window.location.href = '../Home/'
  } else {
    divError.innerHTML= '<p>Invalid email or password.<br> Please try again or sign up</p>'
  }
})

window.addEventListener('load', function() {
  const savedUser = JSON.parse(this.localStorage.getItem('currentUser'))
  if(savedUser) {
    document.getElementById('loginEmail').value = savedUser.email
    document.getElementById('loginPassword').value = savedUser.password
    document.getElementById('rememberMe').checked = true
  }
})

