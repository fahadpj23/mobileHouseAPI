const db = require("../models");

const Product = db.prodcuts;

const addProduct = async (req, res) => {
  let info = {
    name: req.body.name,
  };
  console.log(info);
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
