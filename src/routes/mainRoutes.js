const express = require("express");

const router = express.Router();

/*  MAIN ROUTERS */

router.get("/home", (req, res) => res.send("Pagina de Home"));
router.post("/home", (req, res) => res.send("Informacion enviada"));
router.put("/home", (req, res) => res.send("Pagina de Home desde put"));
router.get("/contact", (req, res) => res.send("Pagina de Contacto"));
router.get("/about", (req, res) => res.send("Pagina sobre Nosotros"));

module.exports = router;
