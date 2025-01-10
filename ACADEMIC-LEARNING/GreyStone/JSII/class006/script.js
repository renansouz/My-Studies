let colors = ['red', 'blue', 'green']

function randowColor(myList) {
  for (let i = 0; i < 10; i++) {
    let listItem = myList[Math.floor(Math.random() * myList.length)]
    console.log(`${i + 1}.) ${listItem}`);
  }
}

randowColor(colors)