// Servidor nodejs con express y Ejs

// 1 - Express
const express = require('express');

// 2 - App
const app = express();

// 3 - Puerto
const puerto = 3000;

// 4 - Usar el motor de plantilla EJS
app.set('view engine', 'ejs');

// 5 - Carpeta donde están las vistas
app.set('views', __dirname + '/views');

// Configurando respuesta a la raiz
app.get('/', (req, res) => {
  res.render('index');

app.use((req, res, next) => {
  res.status(404).render('404');
})

  console.log('Estan visitando la pagina de  inicio');
});

// Servidor a la escucha
app.listen(puerto, () => {
  console.log('Pilas parce.');
});
