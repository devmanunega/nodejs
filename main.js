//Notas de aprendizaje nodejs.

/**
 * Servidor basico con http.
 *
 * 1 - Importar modulo http.
 * 2 - Crear servidor.
 * 3 - Configurar puerto.
 * 4 - Poner a la escucha el servidor.
 */

// 1 - Importar modulo http
const http = require('http');

// 2 - Crear servidor.
const servidor = http.createServer((req, res) => {
  res.end('Servidor puro nodejs - basico');
});

// 3 - Configurar puerto.
const puerto = 3000; // Forma manual para pruebas locales

// 4 - Poner a la escucha el servidor
servidor.listen(puerto, () => {
  console.log(`Escuchando en el puerto ${puerto}`);
});
