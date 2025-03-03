var scoreOfString = function(s) {
    let total = 0
    for(let i = 0; i<s.length; i++) { 
        if(s.charCodeAt(i+1)){
            if(s.charCodeAt(i) < s.charCodeAt(i+1)) {
                total += (s.charCodeAt(i+1) - s.charCodeAt(i))
            } else {
                total += (s.charCodeAt(i) - s.charCodeAt(i+1))
            }
        }
    }
    return total
}

console.log(scoreOfString("hello"));
