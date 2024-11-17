let dev = []
const form = document.getElementById('form')
const tech = document.getElementById('tech')
const registerSubmit = document.getElementById('register-submit')
const nameInput = document.getElementById('name')
const divTech = document.getElementById('div')


tech.addEventListener("click", function (ev){
  ev.preventDefault()

  if (nameInput.value !== '') {
    tech.disabled = true 

    divTech.innerHTML = ''

    const techH2 = document.createElement('h2')
    techH2.innerText = 'Add new tech'
    const br1 = document.createElement('br')

    const nameTechInput = document.createElement('input')
    nameTechInput.type = 'text'
    nameTechInput.id = 'name-tech'
    nameTechInput.placeholder = 'Ex. React'
    const br2 = document.createElement('br')

    const timeExperienceLabel = document.createElement('label')
    timeExperienceLabel.textContent = 'Time Experience'

    const input1 = document.createElement('input')
    input1.type = 'radio'
    input1.name = 'experience'
    input1.id = 'experience1'
    input1.value = 'beginner'
    const label1 = document.createElement('label')
    label1.htmlFor = 'experience1'
    label1.textContent = '0-2 years'
    
    const input2 = document.createElement('input')
    input2.type = 'radio'
    input2.name = 'experience'
    input2.id = 'experience2'
    input2.value = 'mid level'
    const label2 = document.createElement('label')
    label2.htmlFor = 'experience2'
    label2.textContent = '3-4 years'


    const input3 = document.createElement('input')
    input3.type = 'radio'
    input3.name = 'experience'
    input3.id = 'experience3'
    input3.value = 'advanced'
    const label3 = document.createElement('label')
    label3.htmlFor = 'experience3'
    label3.textContent = '5+ years '

    const addButton = document.createElement('button')
    addButton.innerText = 'add'
    addButton.addEventListener("click", function(ev) {
      ev.preventDefault()
      let timeExperienceButton = document.querySelector('input[name="experience"]:checked')
      
      if (nameTechInput.value !== '' && timeExperienceButton){
        let timeExperienceValue = timeExperienceButton.value
        tech.disabled = false
        
        let techInformation = {
          techName: nameTechInput.value,
          timeExperience: timeExperienceValue
        }
        dev.push(techInformation)
        console.log(dev);
        divTech.innerHTML = ''
        alert("Tech added succecfully")
      } else {
        alert("Error: Please fill out all field")
      }
    })

    const removeButton = document.createElement('button')
    removeButton.innerText = 'remove'
    removeButton.addEventListener("click", function(ev) {
      ev.preventDefault()

      divTech.innerHTML = ''
      tech.disabled = false
    })

    return divTech.append(techH2, timeExperienceLabel, br1, nameTechInput, br2, input1, label1, input2, label2, input3, label3, addButton, removeButton)
  }
    alert('Insert a name')
})

form.addEventListener('submit', function(ev){
  ev.preventDefault()
  tech.disabled = true 
  nameInput.disabled = true
  console.log(dev);

  let techsList = ""

  for(let i = 0; i < dev.length; i ++){
    techsList += `${dev[i].techName} - ${dev[i].timeExperience} <br>`
  }

  const final = document.getElementById('final')
  final.innerHTML = `<p>Usário: ${nameInput.value}</p>
  <p>Techs: 
  ${techsList}</p>`
})