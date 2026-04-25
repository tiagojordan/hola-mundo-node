// archivo: index.js

// 1. Importar express
const express = require("express");
const app = express();

// 2. Función auxiliar
function obtenerMensaje() {
  return "¡Hola Mundo desde Node.js en la nube!";
}

// 3. Ruta principal
app.get("/", (req, res) => {
  res.send(obtenerMensaje());
});

// 4. Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
