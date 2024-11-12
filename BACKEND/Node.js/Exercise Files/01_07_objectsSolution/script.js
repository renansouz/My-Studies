var cat = {
   name: "Honey Badger",
   age: 3,
   breed: "mix",
   meow: function() { alert("Meeeeeowwww!"); },
   owner: { name: "Stephanie", state: "CA" }
}

//Get the cat's name
var catName = cat.name;

//Get the owner's name
var catOwner = cat.owner.name;

//Show a message
alert(catOwner + " has a cute cat named " + catName)