const addButton = document.getElementById('addText');
const styleButton = document.getElementById('changeStyle');
const removeButton = document.getElementById('removeText');
const contentDiv = document.getElementById('content');

addButton.addEventListener('click', () => {
    const paragraph = document.createElement('p');
    paragraph.textContent = "This is a dynamically added paragraph."; 
    paragraph.classList.add('highlight');
    contentDiv.appendChild(paragraph); 
});

styleButton.addEventListener('click', () => {
    const paragraphs = document.querySelectorAll('#content p'); 
    paragraphs.forEach((p) => {
        p.style.color = 'green'; 
        p.style.fontSize = '20px'; 
    });
});

removeButton.addEventListener('click', () => {
    contentDiv.innerHTML = ''; 
});
