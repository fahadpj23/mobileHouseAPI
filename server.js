const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

var corOptions = {
  origin: "http://localhost:3000",
};

//middleware
app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser());

app.use(bodyParser.json()); // for JSON data

app.use(bodyParser.urlencoded({ extended: true })); // for URL-encoded data

//routers
const productRouter = require("./routes/productRouter");
const supplierRouter = require("./routes/supplierRouter");

app.use("/api/products", productRouter);
app.use("/api/supplier", supplierRouter);

const PORT = process.env.PORT || 8080;

//server
app.listen(PORT, () => {
  console.log(`server is running port ${PORT}`);
});
