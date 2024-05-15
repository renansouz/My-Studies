class Author {
  constructor(name){
    this.name = name
    this.posts = []
  }

  addPost(post){
    this.posts.push(post)
  }
}

module.exports = Author