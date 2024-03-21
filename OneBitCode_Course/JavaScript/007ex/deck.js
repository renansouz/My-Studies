let cards = ["A", "J", "Q", "K"];
let menu = "";

do {
  menu = prompt(
    `Interaected menu:\nIn this deck there are: ${cards.length} cards \n\nchoose an option below: \n1 - Add a card \n2 - Draw a card  \n3 - CLOSE`
  );

  switch (menu) {
    case "1":
      let newCard = prompt(
        `What's the name of the card you would like to add?`
      );
      cards.unshift(newCard);
      break;
    case "2":
      let cardDrawn = cards.shift();
      if (!cardDrawn) {
        alert("Don't have card in the deck");
      } else {
        alert(`The card drawn was ${cardDrawn}`);
      }
      break;
    case "3":
      alert(`Closing`);
      break;
    default:
      alert("This option is not avaible");
  }
} while (menu !== "3");
