const db = require("../models");

const Product = db.prodcuts;

const addProduct = async (req, res) => {
  const productDetails = req.body;
  let info = {
    name: productDetails.name,
    hsn: productDetails.hsn,
    purchaseRate: productDetails.purchaseRate,
    mrp: productDetails.mrp,
    salesRate: productDetails.salesRate,
    gst: productDetails.gst,
    category: productDetails.category,
  };
  const product = await Product.create(info);
  res.status(200).send(product);
};

const getAllProduct = async (req, res) => {
  let products = await Product.findAll({});
  res.status(200).send(products);
};

module.exports = {
  addProduct,
  getAllProduct,
};
