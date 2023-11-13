const express = require("express");
const app = express();

const methodOverride = require("method-override");

const mainRoutes = require("./src/routes/mainRoutes");

const PORT = 3000;

/* Estaticos*/

app.use(express.static("public"));
app.use("/", mainRoutes);

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
