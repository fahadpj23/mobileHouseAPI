const supplierController = require("../controllers/supplierController");

const express = require("express");

const router = express.Router();

router.post("/addSupplier", supplierController.addSupplier);

router.get("/getSupplier", supplierController.getSupplier);

module.exports = router;
