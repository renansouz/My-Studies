// console.log('A'.charCodeAt(0));

var scoreOfString = function(s) {
  let array = []
    for (let i = 0 ; i < s.length; i++){
      if(s.charCodeAt(i+1)) {
        if(s.charCodeAt(i) < s.charCodeAt(i+1)) {
          array.push(s.charCodeAt(i + 1) - s.charCodeAt(i)) 
        } else {
          array.push(s.charCodeAt(i) - s.charCodeAt(i+1)) 
        }
      } 
    }
    
    return array.reduce((a,b) => a+b)
};

scoreOfString('hello')
