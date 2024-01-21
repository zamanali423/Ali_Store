const express = require("express");
const router = express.Router();
const Products = require("../../models/productsModel/product");

router.get("/getProduct", async (req, res) => {
  const findProduct = await Products.find();

  try {
    if (!findProduct) {
      res.status(404).json({ msg: "product not found" });
    }
    res.status(200).json(findProduct);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.post("/createProduct", async (req, res) => {
  const { fname, lname } = req.body;
  const newProduct = new Products({ firstName: fname, lastName: lname });

  try {
    if (!newProduct) {
      res.status(404).json({ msg: "product not found" });
    }
    const saveProduct = await newProduct.save();
    res.status(201).json({ msg: "Your product add successfully", saveProduct });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
