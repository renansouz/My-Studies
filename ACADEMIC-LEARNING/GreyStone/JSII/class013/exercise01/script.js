let sportsList = document.querySelector('#sportsList');
let subjectList = document.querySelector('#subjectList');

function addItem(itemName,list) {
  const newItem = document.createElement("li");
  newItem.textContent = itemName;
  list.appendChild(newItem);
}

function removeLastItem(list) {
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
}

function removeList(list) {
  if (list) {
    list.remove();
    console.log("List removed");
  }
}

addItem("tennis", sportsList);
addItem("geography", subjectList);
addItem("snowboarding", sportsList);

// removeList(sportsList); 