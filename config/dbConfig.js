module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "mobile_house_api",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 1000,
  },
};
