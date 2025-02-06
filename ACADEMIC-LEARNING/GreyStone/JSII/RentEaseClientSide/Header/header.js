const headerDiv = document.getElementById('headerDiv')

function header() {
  const header = document.createElement("header")
  header.id = "header"

  header.innerHTML = `
      <div>
        <p id="welcomeMessage"></p>
      </div>
      <nav> 
        <a href="../Home/">Home</a>
        <a href="../AllFlats/">All Flats</a>
        <img class="logo" src="../../img/logo.png" alt="logo" width="150px" >
        <a href="../NewFlat/">New Flat</a>
        <a href="../Profile/">Profile</a>
      </nav>
      <div class="right-menu">
        <button onclick="logout()" class="logOutBtn">
          Log out        
          <img src="../../img/logout.svg" alt="logo" width="15px" height="15px">
        </button>
      </div>
      `

      headerDiv.appendChild(header)
}

header()


const logout = () => {
  localStorage.removeItem('currentUser')
  sessionStorage.removeItem('currentUser')
  window.location.href = '../../pages/SignIn/'
}

const currentUser = JSON.parse(localStorage.getItem('currentUser')) || JSON.parse(sessionStorage.getItem('currentUser'));

if (!currentUser) {
  window.location.href = '../SignIn/'; 
} else {
  document.getElementById('welcomeMessage').textContent = `👋Hello, ${currentUser.firstName + ' ' + currentUser.lastName}! `;
}
