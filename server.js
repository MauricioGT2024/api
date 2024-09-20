const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 6001; // Usa el puerto que prefieras

// Servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta que devuelve el contenido del archivo JSON
app.get('/api/data', (req, res) => {
    fs.readFile(path.join(__dirname, 'public', 'data.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error al leer el archivo' });
        }
        res.json(JSON.parse(data));
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
