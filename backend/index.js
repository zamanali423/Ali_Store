require("dotenv").config();
const express = require("express");
const port = process.env.PORT;
const app = express();
const userRouter = require("./routers/authorization/users");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/auth", userRouter);

//! connect mongodb
const url = process.env.USER_URL;
mongoose
  .connect(url)
  .then(() => {
    console.log("Database connect from this server");
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
