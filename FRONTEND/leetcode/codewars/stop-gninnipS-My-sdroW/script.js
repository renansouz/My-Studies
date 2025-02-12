function spinWords(string){
  console.log(string.split(" ").map(word => {
    let temp = []
    if (word.length >= 5) {
      for(let i = 0; i < word.length; i++){
        temp.unshift(word[i])
      } 
      word = temp
      console.log(word);
      return word.join("")
    }
    return word
  }
  ).join(" "));
}


spinWords("Hey fellow Warriors")