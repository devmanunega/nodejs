// Importar || Incluir express
const express = require('express');

// Crear servidor
const app = express();

// Configurar puerto
const puerto = 3000;

// =================================================================

app.use(express.static(__dirname + '/public')) // Al existir en la carpeta public un archivo index.html, este se convierte en la respuesta
// a la ruta '/' raiz.

// Configurar un archivo para una respuesta al codigo 404
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html')
})

//==================================================================

// Metodo GET ruta raiz
app.get('/', (req, res) => {
  res.send('Estás en la pagina Inicio 🏠');
});

// Metodo GET ruta Usuarios
app.get('/usuarios', (req, res) => {
  res.send('Usuarios 🧑👨👩🧑👨‍🦰');

  console.log('Están metiendose con los usuarios')
});

// Metodo GET ruta reportes
app.get('/reportes', (req, res) => {
  res.send('Zona de reportes 🚚');
});

// Colocar la app a la escucha
app.listen(puerto, () => {
  console.log('Escuchando en el puerto', puerto);
});
