function spinWords(string){
  return string.split(" ").map(string => string.length > 5 ? string.split("").reverse().join("") : string ).join(" ")
}
spinWords("Hey fellow warriors")