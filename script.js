let intentos = 0;  // Contador de intentos

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    intentos++;
    
    // Después de 16 intentos, hacer desaparecer el botón "No"
    if (intentos >= 16) {
        noButton.style.display = 'none';
        yesButton.style.fontSize = '3em';  // Hacer el botón "Sí" aún más grande
        yesButton.textContent = 'DALE CLICK AQUÍ YA 😡';
        return;
    }
    
    // Cambiar el mensaje
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Hacer el botón "Sí" más grande
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    
    // Mover el botón "No" a una posición aleatoria
    moveButton(noButton);
}

function moveButton(button) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const randomX = Math.random() * (windowWidth - button.offsetWidth);
    const randomY = Math.random() * (windowHeight - button.offsetHeight);
    
    button.style.position = 'fixed';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
    
    // Hacer el botón "Sí" más grande cada vez que el botón "No" se mueve
    const yesButton = document.querySelector('.yes-button');
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`; // Aumentamos 20% cada vez
}

// Añadir evento para mover el botón cuando el mouse se acerca
document.querySelector('.no-button').addEventListener('mouseover', function(e) {
    moveButton(this);
});

function handleYesClick() {
    window.location.href = "yes_page.html";
}