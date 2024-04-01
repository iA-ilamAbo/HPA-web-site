// require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PostR = require("./Controllers/PostController");

const auth = require("./Controllers/Auth");
const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8080;

mongoose
  .connect("mongodb://127.0.0.1:27017/learnExpress")
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server rah mrani t7t lpor ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("error hna", error);
  });

app.use("/", PostR);
app.use("/", auth);
