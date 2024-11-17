let players = []

function selectPlayer() {
  const form = document.getElementById('form')
  if (form.childElementCount > 0){
    while(form.firstChild){
      form.removeChild(form.firstChild)
    }
  }

  const h2 = document.createElement('h2')
  h2.innerText = "Fill all the form to SELECT a player"

  const ul = document.createElement('ul')

  const positionLi = document.createElement('li')
  positionLi.innerHTML = '<label for="position">Position: </label>'
  const positionInput = document.createElement('input')
  positionInput.type = 'text'
  positionInput.name = 'position'
  positionInput.id = 'position'
  positionLi.appendChild(positionInput)
  ul.appendChild(positionLi)
  ul.appendChild(document.createElement('br'))

  const nameLi = document.createElement('li')
  nameLi.innerHTML = '<label for="name">Name: </label>'
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'name'
  nameInput.id = 'name'
  nameLi.appendChild(nameInput)
  ul.appendChild(nameLi)
  ul.appendChild(document.createElement('br'))

  const numberLi = document.createElement('li')
  numberLi.innerHTML = '<label for="number">Shirt Number:</label>'
  const numberInput = document.createElement('input')
  numberInput.type = 'number'
  numberInput.name = 'number'
  numberInput.id = 'number'
  numberLi.appendChild(numberInput)
  ul.appendChild(numberLi) 
  ul.appendChild(document.createElement('br'))

  const selectButton = document.createElement('button')
  selectButton.innerText = 'Select'
  selectButton.type = 'submit'
  const divSelect = document.createElement('div')
  selectButton.addEventListener("click", function(){
    while (divSelect.firstChild){
    divSelect.removeChild(divSelect.firstChild)
    }
    if (nameInput.value !== '' && positionInput.value !== '' && numberInput.value !== ''){

      const numberExists = players.some(player => player.number === numberInput.value)
      if (numberExists) {
        const error = document.createElement('p')
        error.innerText = 'error'

        divSelect.append(error)
        return form.appendChild(divSelect)
      }

      const p = document.createElement('p')
      p.innerText = `Are you sure that you want to select this player?
      position: ${positionInput.value}
      name: ${nameInput.value}
      number: ${numberInput.value}`

      const yesButton = document.createElement('button')
      yesButton.innerText = 'yes'
      yesButton.addEventListener("click", function(){
        const lineup = document.getElementById('lineup')
        if (lineup.childElementCount === 0){
          const h2 = document.createElement('h2')
          h2.innerText = 'Lineup'
          lineup.appendChild(h2)
        }
        const divPlayer = document.createElement('div')
        divPlayer.id = `player_${players.length}`; 

        const pPlayer = document.createElement('p')
        pPlayer.innerText = `position: ${positionInput.value}
        name: ${nameInput.value}
        number: ${numberInput.value}`
        divPlayer.append(pPlayer)
        lineup.appendChild(divPlayer)

        let player = {
          position: positionInput.value, 
          name: nameInput.value,
          number: numberInput.value
        }
        players.push(player)
        console.log(players);

        positionInput.value = ''
        nameInput.value = ''
        numberInput.value = ''

        divSelect.remove()
      })
      const noButton = document.createElement('button')
      noButton.innerText = 'no'
      noButton.addEventListener("click", function(){
        alert("player not selected")
        positionInput.value = ''
        nameInput.value = ''
        numberInput.value = ''

        divSelect.remove()
      })

      divSelect.append(p, yesButton, noButton)
      form.appendChild(divSelect)

    } else{
      const error = document.createElement('p')
      error.innerText = 'error'

      divSelect.append(error)
      form.appendChild(divSelect)
    }
  })
  ul.appendChild(selectButton)

  form.append(h2, ul)
}

function removePlayer() {
  const form = document.getElementById('form')
  if (form.childElementCount > 0){
    while(form.firstChild){
      form.removeChild(form.firstChild)
    }
  }

  const h2 = document.createElement('h2')
  h2.innerText = "Fill all the form to REMOVE a player"

  const ul = document.createElement('ul')

  const numberLi = document.createElement('li')
  numberLi.innerHTML = '<label for="number">Shirt Number: </label>'
  const numberInput = document.createElement('input')
  numberInput.type = 'number'
  numberInput.name = 'number'
  numberInput.id = 'number'
  numberLi.appendChild(numberInput)
  ul.appendChild(numberLi)

  const removeButton = document.createElement('button')
  removeButton.innerText = 'remove'
  removeButton.type = 'submit'
  const divRemove = document.createElement('div')
  removeButton.addEventListener("click", function(){
    while (divRemove.firstChild){
    divRemove.removeChild(divRemove.firstChild)
    }
    for (let i = 0; i < players.length; i++){
      if (players[i].number === numberInput.value){
          const p = document.createElement('p')
          p.innerText = `Are you sure that you want to delete this player?
          position: ${players[i].position}
          name: ${players[i].name}
          number: ${players[i].number}`

          const yesButton = document.createElement('button')
          yesButton.innerText = 'yes'
          yesButton.addEventListener("click", function(){
            players.splice(i, 1);
            console.log(players);
            numberInput.value = ''

            divRemove.remove()

            const playerDivId = `player_${i}`;
            const playerDivToRemove = document.getElementById(playerDivId);
            if (playerDivToRemove) {
              playerDivToRemove.remove();
            }
          })

          const noButton = document.createElement('button')
          noButton.innerText = 'no'
          noButton.addEventListener("click", function(){
            alert("player not deleted")
            numberInput.value = ''

            divRemove.remove()
          })

          divRemove.append(p, yesButton, noButton)
          return form.appendChild(divRemove)
      }
    } 
    const error = document.createElement('p')
        error.innerText = 'error'   
        
        divRemove.append(error)
        form. appendChild(divRemove)
  })
  form.append(h2, ul, removeButton)
}
