const Author = require('./Author')

let renan = new Author('Renan')
let angularPost = renan.writePost("Angular", "Lorem ipsum dolor sic...")
angularPost.addComment("Nicole", 'Lindo')
angularPost.addComment("Elaine", 'feio')

let reactPost = renan.writePost("React", "Lorem ipsum dolor sic...")
reactPost.addComment("Nicole", 'mara')

console.log(renan);
console.log(angularPost, reactPost);
