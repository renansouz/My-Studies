var scoreOfString = function(s) {
  total = 0
  for(let i = 0; i < s.length; i++) {
      if(s[i+1]){
      if (s[i] < s[i + 1]) {
          total += (s[i+1] - s[i])
      } else {
          total += (s[i] - s[i+1])
      }
      }
  }
  return total
}

console.log(scoreOfString("hello"));
