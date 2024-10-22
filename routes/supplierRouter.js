const supplierController = require("../controllers/supplierController");

const express = require("express");

const router = express.Router();

router.post("/addEntity", supplierController.addSupplier);

router.get("/getEntities", supplierController.getSupplier);

router.delete("/:id", supplierController.deleteSupplier);

module.exports = router;
