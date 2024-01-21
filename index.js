require("dotenv").config();
const express = require("express");
const port = 3002;
const app = express();
const proRouter = require("./routers/products/productRouter");
const userRouter = require("./routers/users/userRouter");
const cors = require("cors");
const body_parser = require("body-parser");
const mongoose = require("mongoose");
const errorMiddleware = require("./middlewares/errors/error_middleware");
const adminRouter = require("./routers/admin-panel/adminRouter");

app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use("/api", proRouter);
app.use("/authentication/user", userRouter);
app.use("/admin", adminRouter);
app.use(errorMiddleware);

const uri = process.env.DB_URL;
mongoose
  .connect(uri)
  .then(() => {
    console.log("DB Connected Successfully");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
