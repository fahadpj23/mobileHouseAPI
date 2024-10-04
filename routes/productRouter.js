const productController = require("../controllers/productController.js");

const router = require("express").Router();

router.post("/addProduct", productController.addProduct);

router.post("/getAllProduct", productController.getAllProduct);

module.exports = router;
