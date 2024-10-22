const productController = require("../controllers/productController.js");

const router = require("express").Router();

router.post("/addEntity", productController.addProduct);

router.get("/getEntities", productController.getAllProduct);

module.exports = router;
