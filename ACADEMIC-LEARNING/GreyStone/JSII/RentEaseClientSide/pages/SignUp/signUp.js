document.addEventListener('DOMContentLoaded', function () {
  const loggedInUser = JSON.parse(localStorage.getItem('currentUser')) || JSON.parse(sessionStorage.getItem('currentUser'));

  if (loggedInUser) {
    window.location.href = '../Home/'; 
  }
});

const signupForm = document.getElementById('signupForm')

signupForm.addEventListener('submit', function(event){
  event.preventDefault()

  const divError = document.getElementById('error')
  divError.innerHTML = "";

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const birthDate = document.getElementById('birthDate').value;
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confimPassword').value;

  if (firstName.length < 2 || lastName.length < 2) {
    divError.textContent = 'First and last names must be at least 2 characters long.';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    divError.textContent = 'Invalid email format!';
    return;
  }

  const today = new Date();
  const birthDateObj = new Date(birthDate);
  const age = today.getFullYear() - birthDateObj.getFullYear();
  
  if (age < 18 || age > 120) {
    divError.textContent = 'You must be between 18 and 120 years old!';
    return;
  }

  if (password.length < 6) {
    divError.textContent = 'Password must be at least 6 characters long!';
    return;
  }

  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[^a-zA-Z0-9]/.test(password);

  if (!hasLetter || !hasNumber || !hasSpecialChar) {
    divError.textContent = 'Password must contain at least one letter, one number, and one special character!';
    return;
  }

  if(password !== confirmPassword){
    divError.textContent = 'Passwords do not match. Please try again'
    return;
  } 
  
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = users.find(user => user.email === email);

  if (userExists) {
    divError.textContent = 'User already exists. Please log in.';
    return;
  }

  users.push({ firstName, lastName, birthDate, email, password });
  localStorage.setItem('users', JSON.stringify(users));

  alert('Account created successfully! Please log in.');
  window.location.href = '../SignIn/';
})