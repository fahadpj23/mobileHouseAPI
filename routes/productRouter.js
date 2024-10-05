const productController = require("../controllers/productController.js");

const router = require("express").Router();

router.post("/addProduct", productController.addProduct);

router.get("/getAllProduct", productController.getAllProduct);

module.exports = router;
