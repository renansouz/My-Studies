const divP1 = document.getElementById('divPlayer1')
const p1Input = document.getElementById('player1')
const p1 = p1Input.value.trim()
const divP2 = document.getElementById('divPlayer2')
const p2Input = document.getElementById('player2')
const p2 = p2Input.value.trim()
const h1 = document.getElementById('h1')

const container = document.getElementById('container')
const btn0 = document.getElementById('0-btn');
const btn1 = document.getElementById('1-btn');
const btn2 = document.getElementById('2-btn');
const btn3 = document.getElementById('3-btn');
const btn4 = document.getElementById('4-btn');
const btn5 = document.getElementById('5-btn');
const btn6 = document.getElementById('6-btn');
const btn7 = document.getElementById('7-btn');
const btn8 = document.getElementById('8-btn');

const result = document.getElementById('result')
const h2 = document.getElementById('resultH2')

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
    container.style.display = 'grid'
    divP2.style.display = 'none'
    h1.innerText = `${p1}'s turn`
    h1.style.color = "blue"
  } else {
    alert('Please enter a name for Player 2')
  }
})

document.querySelectorAll('.key').forEach(function(button) {
  button.addEventListener('click', function () {
    if (h1.innerText === `${p1}'s turn`){
      h1.innerText = `${p2}'s turn`
      h1.style.color = "red"
      this.innerText = "X"
      this.style.color = "blue"
    } else {
      h1.innerText = `${p1}'s turn`
      h1.style.color = "blue"
      this.innerText = "O"
      this.style.color = "red"
    }
    if (this.innerText == "O" || this.innerText == "X") {
      this.disabled = true
    }    

    //conditions victory p1
    if ( btn0.innerText === 'X' && btn1.innerText === 'X' && btn2.innerText === 'X' ) {
      winp1()
      bgWinner(btn0)
      bgWinner(btn1)
      bgWinner(btn2)
    } else if ( btn3.innerText === 'X' && btn4.innerText === 'X' && btn5.innerText === 'X' ) {
      winp1()
      bgWinner(btn3)
      bgWinner(btn4)
      bgWinner(btn5)
    } else if ( btn6.innerText === 'X' && btn7.innerText === 'X' && btn8.innerText === 'X' ) {
      winp1()
      bgWinner(btn6)
      bgWinner(btn7)
      bgWinner(btn8)
    } else if ( btn0.innerText === 'X' && btn3.innerText === 'X' && btn6.innerText === 'X' ) {
      winp1()
      bgWinner(btn0)
      bgWinner(btn3)
      bgWinner(btn6)
    } else if ( btn1.innerText === 'X' && btn4.innerText === 'X' && btn7.innerText === 'X' ) {
      winp1()
      bgWinner(btn1)
      bgWinner(btn4)
      bgWinner(btn7)
    } else if ( btn2.innerText === 'X' && btn5.innerText === 'X' && btn8.innerText === 'X' ) {
      winp1()
      bgWinner(btn2)
      bgWinner(btn5)
      bgWinner(btn8)
    } else if ( btn0.innerText === 'X' && btn4.innerText === 'X' && btn8.innerText === 'X' ) {
      winp1()
      bgWinner(btn0)
      bgWinner(btn4)
      bgWinner(btn8)
    } else if ( btn2.innerText === 'X' && btn4.innerText === 'X' && btn6.innerText === 'X' ) {
      winp1()
      bgWinner(btn2)
      bgWinner(btn4)
      bgWinner(btn6)
    } else if ( btn0.innerText === 'O' && btn1.innerText === 'O' && btn2.innerText === 'O' ) {
      winp2()
      bgWinner(btn0)
      bgWinner(btn1)
      bgWinner(btn2)
    } else if ( btn3.innerText === 'O' && btn4.innerText === 'O' && btn5.innerText === 'O' ) {
      winp2()
      bgWinner(btn3)
      bgWinner(btn4)
      bgWinner(btn5)
    } else if ( btn6.innerText === 'O' && btn7.innerText === 'O' && btn8.innerText === 'O' ) {
      winp2()
      bgWinner(btn6)
      bgWinner(btn7)
      bgWinner(btn8)
    } else if ( btn0.innerText === 'O' && btn3.innerText === 'O' && btn6.innerText === 'O' ) {
      winp2()
      bgWinner(btn0)
      bgWinner(btn3)
      bgWinner(btn6)
    } else if ( btn1.innerText === 'O' && btn4.innerText === 'O' && btn7.innerText === 'O' ) {
      winp2()
      bgWinner(btn1)
      bgWinner(btn4)
      bgWinner(btn7)
    } else if ( btn2.innerText === 'O' && btn5.innerText === 'O' && btn8.innerText === 'O' ) {
      winp2()
      bgWinner(btn2)
      bgWinner(btn5)
      bgWinner(btn8)
    } else if ( btn0.innerText === 'O' && btn4.innerText === 'O' && btn8.innerText === 'O' ) {
      winp2()
      bgWinner(btn0)
      bgWinner(btn4)
      bgWinner(btn8)
    } else if ( btn2.innerText === 'O' && btn4.innerText === 'O' && btn6.innerText === 'O' ) {
      winp2()
      bgWinner(btn2)
      bgWinner(btn4)
      bgWinner(btn6)
    }

    checkDraw()
}) 
})

function winp1(){
  result.style.display = 'flex'
  h2.innerText = `WINNER: ${p1}🏆`
  h1.style.display = 'none'
}

function winp2() {
  result.style.display = 'flex'
      h2.innerText = `WINNER: ${p2}🏆`
      h1.style.display = 'none'
}

function bgWinner(bg) {
  bg.style.backgroundColor = '#7def98'
}

function checkDraw() {
  const allButtons = [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8]
  const allFilled = allButtons.every(button => button.innerText === 'X' || button.innerText === 'O')
  if (allFilled && result.style.display !== 'flex') {
    result.style.display = 'flex';
    h2.innerText = 'Draw! 😕';
    h2.style.color = 'white'
    h1.style.display = 'none';
  }
}

document.getElementById('playAgain').addEventListener('click', function () {
  location.reload()
})