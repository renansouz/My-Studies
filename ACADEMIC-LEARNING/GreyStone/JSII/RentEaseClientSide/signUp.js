const signupForm = document.getElementById('signupForm')

signupForm.addEventListener('submit', function(event){
  event.preventDefault()

  const divError = document.getElementById('error')

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const birthDate = document.getElementById('birthDate').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confimPassword = document.getElementById('confimPassword').value;

  if(password !== confimPassword){
    divError.textContent = 'Passwords do not match. Please try again'
    return;
  } 
  
  const users = JSON.parse(localStorage.getItem('users')) || []
  const userExists = users.find(user => user.email === email)

  if (userExists) {
    alert('User already exists. Please log in')
  } else {
    users.push({firstName, lastName, birthDate, email, password})
    localStorage.setItem('users', JSON.stringify(users))
    alert('account created successfully! Please Log in.')
    window.location.href = 'signIn.html'
    console.log(users)
  }
})

//   TODO:
//   All fields are required.
// • Data type check.
// • Email must be in email format.
// • Both names (first and last) must be at least 2 characters long.
// • The derived age must be in the range of 18-120.
// • Password must be at least 6 characters.
// • Password must contain
// – Letters
// – Numbers
// – A character that is neither a letter nor a number.