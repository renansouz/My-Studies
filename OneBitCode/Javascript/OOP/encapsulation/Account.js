class Account {
  #password
  #balance = 0
  constructor(user) {
    this.email = user.email
    this.#password = user.password
  }

  getBalance(email, password) {
    if (this.#auth(email, password))
      return this.#balance
    else
      return null
  }
  
  #auth(email, password) {
    return this.email === email && this.#password === password
  }
}

const user = {
  email: "renan@",
  password: "12354"
}

const myAccount = new Account(user)

console.log(myAccount);
console.log(myAccount.getBalance("renan@", "12354"));

