const db = require("../models");

const Supplier = db.supplier;

const addSupplier = async (req, res) => {
  const supplierDetails = req.body;
  let info = {
    name: supplierDetails.name,
    address: supplierDetails.address,
    phone: supplierDetails.phone,
  };
  console.log(info);
  const supplier = await Supplier.create(info);
  res.status(200).json({
    success: "supplier Added successfully",
    data: supplier,
  });
};

const getSupplier = async (req, res) => {
  let suppliers = await Supplier.findAll({});
  res.status(200).json({ data: suppliers });
};
module.exports = {
  addSupplier,
  getSupplier,
};
