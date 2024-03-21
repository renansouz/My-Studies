let patients = [];
let menu;

do {
  let queue = "";

  for (let i = 1; i <= patients.length; i++) {
    queue += i + "º " + patients[i - 1] + "\n";
  }

  menu = parseFloat(
    prompt(
      `Interactive menu:\nchoose an option below\n 1 - add a new patient\n 2 - call a patient\n 3 - CLOSE\n\n\npatients:\n${queue} `
    )
  );

  switch (menu) {
    case 1:
      let newPatient = prompt(`What's the name of the patient?`);
      patients.push(newPatient);
      break;
    case 2:
      let currentlyPatient = patients.shift();
      if (patients.length > 0) {
        alert(`calling ${currentlyPatient}`);
      } else {
        alert("don't have patients in the queue");
      }

      break;
    case 3:
      alert("closing");
      break;
    default:
      alert(`This option is not avaible`);
  }
} while (menu !== 3);
