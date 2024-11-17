const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function (){
  input.value = input.value === '' ? 'Hello, world!' : ''
  input.getAttribute('value')
})

document.getElementById('type').addEventListener('click', function(){
  // input.type = input.type !== 'radio' ? 'radio' : 'text'
  input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function(){
  input.placeholder = 'type something...'
})

document.getElementById('disabled').addEventListener('click', function() {
  input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function() {
  const data = input.dataset.something
  console.log("the value of the attribute data-something is: " + data);
  input.dataset.something = 'changing value'
})