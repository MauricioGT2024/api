// Variable para almacenar los datos JSON
let jsonData = null;

// Hacer una solicitud al servidor para obtener los datos JSON
fetch('./api/data')
    .then(response => response.json())
    .then(data => {
        jsonData = data; // Almacena los datos JSON
        document.getElementById('json-data').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });

// Función para mostrar el mensaje sorpresa y los datos JSON
document.getElementById('sorpresa-btn').addEventListener('click', () => {
    const surpriseMessage = "hola lucio este un mensaje secreto si quiere ver el json dele click al otro boton (no es un screamer)"
    document.getElementById('sorpresa-mensaje').textContent = surpriseMessage;

    // Mostrar los datos JSON al hacer clic en el botón
    if (jsonData) {
        document.getElementById('json-data').textContent = JSON.stringify(jsonData, null, 2);
    }
});

document.getElementById('mostrar-btn').addEventListener('click', () => {
    window.location.href = './api/data';
})

