let vacancies = []

function showVacancies() {
  if(vacancies.length == 0){
    alert("Currently, there are no vacancies avaible in the system.")
  } else{  
    const vacancyInText = vacancies.reduce(function (finalText, vacancy, index) {
      finalText += index + ". "
      finalText += vacancy.name
      finalText += " (" + vacancy.candidates.length + " candidates) \n"
      return finalText
    }, "")

    alert(vacancyInText)
  }
}

function createVacancy(){
  const name = prompt("What is the name of your vacancy?")
  const description = prompt("Please provide a description for your vacancy:")
  const deadline = prompt("Enter the application deadline for this vacancy: (dd/mm/yyyy)")

  const isConfirmed = confirm(`
    Please confirm the details before creating for vacancy:
    Name: ${name}
    Description: ${description}
    Application Deadline: ${deadline}
    Are you sure you want to create this vacancy?
  `)

  if(isConfirmed){
    alert("Vacancy created successfully")

    const newVacancy = {
      index: 0,
      name,
      description,
      deadline,
      candidates: [],
    }

    vacancies.push(newVacancy)
  } else {
    alert("Vacancy creation cancelled, returning to the main menu.")
  }
}

function viewVacancy(){
  const index = parseFloat(prompt("Please enter the index of the vacancy you wish to view:"))
  if (index >= vacancies.length || index < 0){
    alert("index no available")
    return
  }
  
  const vacancy = vacancies[index]

  const candidatesInText = vacancy.candidates.reduce(function (finalText, candidate){
    return finalText + "\n - " + candidate
  }, "")
  alert(
    "vacancy n° " + index +
    "\nName: " + vacancy.name +
    "\nDescription: " + vacancy.description +
    "\nDeadline: " + vacancy.deadline +
    "\nNumber of candidates: " + vacancy.candidates.length +
    "\nCadidates: " + candidatesInText
  )
}

function registerCandidate(){
  if (vacancies.length == 0){
    alert("There are currently no vacancies to apply for.")
  } else {
      const candidate = prompt("What is the name of the candidate?")
      const index = prompt("What is the index of the vacancy?")
      const vacancy = vacancies[index]

      const isConfirm = confirm(`
          Are you sure you want to register the candidate ${candidate} in the vacancy ${index}?
          Name: ${vacancy.name}
          Description: ${vacancy.description}
          Deadline: ${vacancy.deadline}
          `)

      if(isConfirm){
        vacancy.candidates.push(candidate)
        alert("register finish succesfully.")
      }
    }
}

function deleteVacancy(){
  if (vacancies.length == 0){
    alert("There are no vacancies to delete.")
  } else {
    const index = prompt("What is the index of the vacancy you want to delete?")  
    const vacancy = vacancies[index]

    const isConfirm = confirm(`
    Are you sure you want to delete the vacancy ${index}?
    Name: ${vacancy.name}
    Description: ${vacancy.description}
    Deadline: ${vacancy.deadline}
    `)

    if (isConfirm){
      vacancies.slice(index, 1)
      alert("Vacancy deleted.")
    }
  }
}

function showMenu() {
  return prompt(`
  Job Vacancy System
  choose one option:\n
  1 - Show avaible vacancies
  2 - Create a new vacancy
  3 - View a specific vacancy
  4 - Register a candidate for a vacancy
  5 - Delete a vacancy
  6 - Exit
  `)
}

function execute(){
  let options = ""
  do{
    options = showMenu()

    switch(options){
      case "1":
        showVacancies()
        break
      case "2":
        createVacancy()
        break
      case "3":
        viewVacancy()
        break
      case "4":
        registerCandidate()
        break
      case "5":
        deleteVacancy()
        break
      case "6":
        alert("Exiting.")
        break
      default:
        alert("This option is not available")
    }
  }while(options !== "6")
}

execute()