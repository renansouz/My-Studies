// nullish === null or undefined

const user = {
  name: "john Doe",
  friends: [{
    name: "mary",
    address: {
      street: "some street",
      number: 89
    }
  }]
}

console.log(user?.friends[0]?.phone?.ddd);

console.log(user.brothers?.[5].name);