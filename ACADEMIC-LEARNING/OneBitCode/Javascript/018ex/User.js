class User {
  constructor(fullname, email, password){
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  login(email, password){
    if (email === this.email && password === this.password)
      console.log("Login successful");
    else
      console.log("login NOT successful");
  }
}

const renan = new User("Renan de Souza", "renanss2005@gmail.com", "renan123")

renan.login("renanss2005@gmail.com", "renan123") 