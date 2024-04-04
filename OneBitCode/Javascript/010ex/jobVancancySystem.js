let vacancies = []

console.log(vacancies)

function showVacancies() {
  if(vacancies.length == 0){
    alert("Currently, there are no vacancies avaible in the system.")
  } else{
  const storeNames = []
  for (let i = 0; i < vacancies.length; i++){
    storeNames.push(("Index: " + (vacancies[i].index) + " | Name: " + vacancies[i].name + " | Candidates: 0\n"))
  }
  alert("All available vacancies:\n" + storeNames.join(""))
}
}

function createVacancy(){
  const vacancyName = prompt("To create a vacancy, please answer all of the folowing questions. \nWhat is the name of your vacancy?")
  const vacancyDescription = prompt("Please provide a description for your vacancy:")
  const deadline = prompt("Enter the application deadline for this vacancy:")

  let isConfirmed = confirm(`
  Please confirm the details before creating for vacancy:
  Name: ${vacancyName}
  Description: ${vacancyDescription}
  Application Deadline: ${deadline}
  Are you sure you want to create this vacancy?
  `)

  if(isConfirmed){
    alert("Vacancy created successfully")

    let newVacancy = {
      index: 0,
      name: "",
      description: "",
      deadline: "",
      candidates: "0",
      candiadatesName: []
    }

    vacancies.push(newVacancy)
    vacancies[vacancies.length - 1].index += vacancies.length
    vacancies[vacancies.length - 1].name = vacancyName
    vacancies[vacancies.length - 1].description = vacancyDescription
    vacancies[vacancies.length - 1].deadline = deadline
  } else {
    alert("Vacancy creation cancelled, returning to the main menu.")
  }
}
function viewVacancy(){
  if (vacancies.length == 0){
    alert("Currently, there are no vacancies available in the system.")
  } else {
    let indexOfView = parseFloat(prompt("Please enter the index of the vacancy you wish to view:"))
    if(indexOfView < 1 || indexOfView > vacancies.length){
      alert("There is no vacancy with this index.")
    }else if(indexOfView == vacancies[indexOfView-1].index){
      let candidatesNameExist = ""
      if (vacancies[indexOfView -1].candiadatesName.length > 0){
        candidatesNameExist = vacancies[indexOfView - 1]. candiadatesName
        candidatesNameExist.join(" ")
      } else {
        candidatesNameExist = "There are no candidates yet."
      }
      const currentVacancy = vacancies[indexOfView - 1]
        alert(`
        Index: ${currentVacancy.index}   
        Vacancy: ${currentVacancy.name}
        Description: ${currentVacancy.description}
        Application deadline: ${currentVacancy.deadline}
        Candidates: ${currentVacancy.candidates}
        List of candidates: ${candidatesNameExist}
        `)
    }
  }
}

function registerCandidate(){
  if (vacancies.length == 0){
    alert("There are currently no vacancies to apply for.")
  } else {
      let candidateAdd = prompt("What is the name of the candidate?")
      let indexAdd = prompt("What is the index of the vacancy?")
      if(indexAdd < 1 || indexAdd > vacancies.length){
        alert("There is no vacancy with this index.")
      } else {
        let isRight = confirm(`
Are you sure you want to register the candidate ${candidateAdd} for this vacancy? 
          Vacancy: ${vacancies[indexAdd - 1].name}
          Description: ${vacancies[indexAdd - 1].description}
          Applicatoin Deadline: ${vacancies[indexAdd - 1].deadline}
          Current number of candidates: ${vacancies[indexAdd - 1].candidates}
          `)

        if(isRight){
          vacancies[indexAdd - 1].candidates ++
          vacancies[indexAdd - 1].candiadatesName.push(candidateAdd)
          console.log(vacancies[indexAdd -1].candiadatesName)
        } else {
          alert("Returning to the main menu.")
          }
      }
    }
}

function deleteVacancy(){
  if (vacancies.length == 0){
    alert("There are no vacancies to delete.")
  } else {
    let indexDelete = prompt("What is the index of the vacancy you want to delete?")

    if(indexDelete < 1 || indexDelete > vacancies.length){
      alert("There is no vacancy with this index.")
    } else {
      let confirmDelete = confirm(`
      Are you sure you want to delete this vacancy?
      Index: ${vacancies[indexDelete -1].index}
      Name: ${vacancies[indexDelete - 1].name}
      Description: ${vacancies[indexDelete - 1].description}
      Application Deadline: ${vacancies[indexDelete - 1].deadline}
      Candidates: ${vacancies[indexDelete - 1].candidates}
      `)
      if(confirmDelete){
        vacancies.splice(indexDelete -1, 1)
      }else{
        alert("Returning to the main menu.")
      }
    }
  }
}


function showMenu() {
  return prompt(`
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