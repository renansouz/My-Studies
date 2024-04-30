// notes to practice

const form = document.getElementById('form')

form.addEventListener('submit', function (ev) {
  ev.preventDefault()

  const name = document.querySelector('input[name="name"]').value

  let salad = ''
  document.querySelectorAll('input[name="salad"]:checked').forEach(function (item){
    salad += ' - ' + item.value + '\n'
  })
})