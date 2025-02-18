let romanToInt = roman => {
  const romanMap = {
    'M':1000,
    'D':500,
    'C':100,
    'L':50,
    'X':10,
    'V':5,
    'I':1
  }
    let  total = 0;
    for(let i = 0; i < roman.length; i++){
        if(romanMap[roman[i]] < romanMap[roman[i+1]]) {
            total -= romanMap[roman[i]] 
        } else {
             total += romanMap[roman[i]] 
        }
    }
    return total
  }