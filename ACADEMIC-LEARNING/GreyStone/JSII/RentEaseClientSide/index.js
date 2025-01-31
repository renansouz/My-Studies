const logout = () => {
  localStorage.removeItem('currentUser')
  sessionStorage.removeItem('currentUser')
  window.location.href = 'signIn.html'
}

const currentUser = JSON.parse(localStorage.getItem('currentUser')) || JSON.parse(sessionStorage.getItem('currentUser'));

  if (!currentUser) {
    window.location.href = 'signIn.html'; 
    
  } else {
    document.getElementById('welcomeMessage').textContent = `Hello, ${currentUser.firstName + ' ' + currentUser.lastName}! `;
  }