const divP1 = document.getElementById('divPlayer1')
const p1Input = document.getElementById('player1')
const p1 = p1Input.value.trim()
const divP2 = document.getElementById('divPlayer2')
const p2Input = document.getElementById('player2')
const p2 = p2Input.value.trim()

p1Input.focus()
divP2.style.display = 'none'
document.getElementById('continueBtn').addEventListener('click', function () {
  const p1 = p1Input.value.trim();
  if (p1.length > 0) {
    divP1.style.display = 'none'
    divP2.style.display = ''
    p2Input.focus()
  } else {
    alert('Please enter a name for Player 1')
  }
})

document.getElementById('startBtn').addEventListener('click', function () {
  const p2 = p2Input.value.trim();
  if (p2.length > 0) {
    divP2.style.display = 'none'
  } else {
    alert('Please enter a name for Player 2')
  }
})


console.log(p1, p2);