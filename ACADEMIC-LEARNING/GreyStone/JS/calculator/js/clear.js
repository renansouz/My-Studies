export function clear() {
  document.getElementById('clear').addEventListener('click', function () {
    input.value = ''
    input.focus()
  })
}