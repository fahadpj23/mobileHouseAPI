module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hsn: {
      type: DataTypes.STRING,
    },
    purchaseRate: {
      type: DataTypes.INTEGER,
    },
    mrp: {
      type: DataTypes.INTEGER,
    },
    salesRate: {
      type: DataTypes.INTEGER,
    },
    gst: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Product;
};
