const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

/* ADMIN ROUTES*/

router.get("/admin", adminController.admin);
router.get("/create", adminController.create);
router.get("/edit", adminController.edit);

module.exports = router;
