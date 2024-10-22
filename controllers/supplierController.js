const db = require("../models");

const Supplier = db.supplier;

const addSupplier = async (req, res) => {
  const supplierDetails = req.body;
  let info = {
    name: supplierDetails.name,
    address: supplierDetails.address,
    phone: supplierDetails.phone,
  };
  try {
    const existingUser = await Supplier.findOne({
      where: { phone: supplierDetails.phone },
    });
    if (existingUser)
      return res
        .status(409)
        .json({ message: "User with this phone number already exists" });
    else {
      const supplier = await Supplier.create(info);
      res.status(200).json({
        success: "supplier Added successfully",
        data: supplier,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

const getSupplier = async (req, res) => {
  let suppliers = await Supplier.findAll({});
  res.status(200).json({ data: suppliers });
};

const deleteSupplier = async (req, res) => {
  console.log(req.param);
  let supplierDelete = await db.supplier.destroy({
    where: { id: 1 },
  });
  res.status(200).json({ message: "supplier Deleted successFully" });
};

module.exports = {
  addSupplier,
  getSupplier,
  deleteSupplier,
};
