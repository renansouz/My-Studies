let add = 0;
let remove = 0;
let bank;

let initialMoney = parseFloat(
  prompt(`How much initial money do you have avaible?(U$)`)
);

do {
  bank = parseFloat(
    prompt(`
You have U$${initialMoney}:\n
1- I want to add money to this account
2- I want to remove money from this account
3- close
`)
  );
  switch (bank) {
    case 1:
      initialMoney += parseFloat(prompt(`how much money do you wanna add?`));
      break;
    case 2:
      initialMoney -= parseFloat(prompt(`how much money do you wanna remove?`));
    case 3:
      break;
    default:
      alert(`this option is NOT avaible`);
  }
} while (bank !== 3);
