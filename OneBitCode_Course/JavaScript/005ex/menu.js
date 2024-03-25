let menu = "";

do {
  menu = parseFloat(
    prompt(`
    choose one of the avaible options\n
    1- credit card\n
    2- debit card\n
    3- money\n
    4- pix\n
    5- bank slip\n
    6- close
    `)
  );

  switch (menu) {
    case 1:
      alert("Use choose credit card");
      break;
    case 2:
      alert("Use choose debit card");
      break;
    case 3:
      alert("Use choose money");
      break;
    case 4:
      alert("Use choose PIX");
      break;
    case 5:
      alert("Use choose bank slip");
      break;
    case 6:
      break;
    default:
      alert("This number is NOT avaible");
  }
} while (menu !== 6);
