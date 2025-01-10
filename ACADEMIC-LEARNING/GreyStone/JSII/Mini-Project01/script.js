var arr = ["images/brasil.jpg", "images/canada.webp", "images/indonesia.jpg", "images/korea.png"];
var arrWord = ["brasil", "canada" ,"indonesia", "korea"];
var counter = 1;
var usedImages = []
i = selectRandomImage();
var score = 0;

var highScore = 0;
let btnPlayAgain = document.querySelector('.playAgain');
const container = document.querySelector('main');

const showbtnPlayAgain = function() {
  btnPlayAgain.classList.remove('hidden');
  container.classList.add('container');
  container.style.backgroundColor = '#de840f';
};
  
const hiddenbtnPlayAgain = function() {
  btnPlayAgain.classList.add('hidden');
  container.classList.remove('container');
  container.style.backgroundColor = ''; 
};

function gameOver() {
  if (score > highScore) {
    highScore = score;
    document.querySelector(".highscore").textContent = "🍭 high score " + score;
  }
  document.body.classList.remove('backGroundBody');
  showbtnPlayAgain();
}

function selectRandomImage() {
  document.querySelector(".countQuestion").textContent= "Question number " + counter;
  let index;
  do {
    index = Math.floor(Math.random() * arr.length);
  } while (usedImages.includes(index)); 
  usedImages.push(index); 
  
  document.getElementById("imgToGuess").src = arr[index];
  return index;
}

function play() {
  
  if (counter <= arr.length) {
    const messageElement = document.querySelector(".message");
    const letter = document.getElementById("input").value;
      
    if (!letter) {
      messageElement.textContent = "No Letter 🥵";
              score -= 2;
    } else {
      const word = arrWord[i]
      if (letter === word[0]) {
        messageElement.textContent = "correct Answer 🤙";
        score += 5;
      } else {
        messageElement.textContent = "wrong Answer 👎";
        score -= 2;
      }
    }
     
    
    document.getElementById("input").value = "";
    document.querySelector(".score").textContent = "score :  " + score;
      
    counter++;

    if (counter <= arr.length) {
      i = selectRandomImage();
    } else {
      gameOver()
    }
  }
}
  
  document.querySelector(".play").addEventListener('click', play);

  document.querySelector(".playAgain").addEventListener('click', reset);

function reset() {
  // document.body.classList.add('backGroundBody');
  counter = 1;
  usedImages = []
  i = selectRandomImage();
  score = 0;
  document.querySelector(".score").textContent = 0;
  document.getElementById("input").value = "";
  hiddenbtnPlayAgain();
}