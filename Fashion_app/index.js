require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");

const dbConnect = require("./config/db-connect");

const productRoutes = require("./routes/product-routes");

const app = express();

app.use(express.json());

dbConnect();

app.use("/products", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});