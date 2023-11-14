const express = require("express");
const app = express();

const methodOverride = require("method-override");

const mainRoutes = require("./src/routes/mainRoutes");

const adminRoutes = require("./src/routes/adminRoutes");

const PORT = 3000;

// metodos nativos de express
app.use(express.urlencoded());
app.use(express.json());

// Override para habilitar los metodos de PUT y DELETE, captura estas peticiones
app.use(methodOverride("_method"));

/* Estaticos*/

app.use(express.static("public"));
app.use("/", mainRoutes);
app.use("/", adminRoutes);

// Middleware para manejar el error 404

app.use((req, res, next) => {
  res.status(404).send("Recurso no encontrado");
});

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
