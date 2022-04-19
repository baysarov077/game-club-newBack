const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/image", express.static(path.resolve(__dirname, "image")));
app.use(require("./routes/index"));

mongoose
  .connect(process.env.URL)
  .then(() => console.log("Connected"))
  .catch(() => "Error");

app.listen(process.env.PORT, () => {
  console.log("Connecting...");
});
