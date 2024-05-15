const Comment = require('./Comment')
class Post {
  constructor(postName, author) {
    this.postName = postName
    this.author = author
    this.comments = []
  }

  addComment(commentText) {
    const comment = new Comment(commentText)
    this.comments.push(comment)
  }
}

module.exports = Post