let word = prompt(`what word would you like to check if it's a palidrome?`);
let invertedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  invertedWord += word[i];
}

if (word === invertedWord) {
  alert(`${word} is a palidrome`);
} else {
  alert(`${word} is not a palindrome
         ${invertedWord} !==  ${word}`);
}
