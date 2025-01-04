const button = document.getElementById('myButton');

function handleClick() {
    const message = document.getElementById('message');
    message.textContent = "Button clicked! Event handler is working.";
}

button.addEventListener('click', handleClick);
