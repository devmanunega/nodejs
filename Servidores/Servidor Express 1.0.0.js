/**
 * // Servidor usando express
 *
 * 1 - Importar expres.
 * 2 - Crear servidor.
 * 3 - Configurar puerto.
 * 4 - Configurar respuestas a los diferentes metodos || verbos http (GET, POST, PUT...).
 * 5 - Colocar el servidor a la escucha de peticiones.
 */

// 1 - Importar express.
const express = require('express');

// 2 - Crear servidor.
const servidor = express();

// 3 - Configurar puerto.
const puerto = 3000;

// 4 - Configurar respuestas a los diferentes metodos || verbos http (GET, POST, PUT...).
servidor.get('/', (req, res) => {
  res.send('Servidor nodejs con express');
});

// 5 - Colocar el servidor a la escucha de peticiones.
servidor.listen(puerto, () => {
  console.log('Escuchando en el puerto:', puerto);
});
