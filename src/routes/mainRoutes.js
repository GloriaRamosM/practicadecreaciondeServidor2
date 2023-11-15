const express = require("express");

const router = express.Router();

const mainController = require("../controllers/mainController");

/*  MAIN ROUTERS */

router.get("/home", mainController.home);
router.post("/home", (req, res) => res.send("Informacion enviada"));
router.put("/home", (req, res) => res.send("Pagina de Home desde put"));
router.get("/contact", mainController.contact);
router.get("/about", mainController.about);

module.exports = router;
