const Author = require('./Author')
const Post = require('./Post')

let renan = new Author('Renan')
let angularPost = new Post('Angular', 'Renan')
renan.addPost(angularPost)
let reactPost = new Post('React', 'Renan')
renan.addPost(reactPost)
angularPost.addComment('Lindo')
angularPost.addComment('feio')
reactPost.addComment('mara')

console.log(JSON.stringify(renan, null, 2));