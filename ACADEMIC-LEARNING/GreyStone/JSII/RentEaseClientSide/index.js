const logout = () => {
  localStorage.removeItem('currentUser')
  sessionStorage.removeItem('currentUser')
  window.location.href = 'signIn.html'
}
