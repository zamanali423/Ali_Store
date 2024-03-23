const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../../database/userDatabase/userData");
const bcrypt = require("bcryptjs");
const validate=require('../../middleware/validate')
const authorization=require('../../middleware/auth')
const register=require('../../validation/register')
const login=require('../../validation/login')

router.get("/", (req, res) => {
  res.send("ZAman ALI");
});

//! For register

router.post("/register", validate(register), async (req, res) => {
  const { name, email, password,confirm } = req.body;
  try {
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      res.status(400).json({ msg: "email already exist" });
    }
    const user = new User({ name, email, password,confirm });
    const token = await user.generateToken();
    console.log(token);
    const newUser = await user.save();
    res.status(201).json({ msg: "Register User Successfully",newUser });
    if (!newUser) {
      res.status(404).json({ msg: "user not found" });
    }
  } catch (error) {
    res.status(500).json({ msg: `Some error: ${error.message}` });
  }
});

//! For Login

router.post("/login", validate(login), async (req, res) => {
  const { email, password } = req.body;
  try {
    const emailExist = await User.findOne({ email });
    if (!emailExist) {
     return res.status(404).json({ msg: "Email not register" });
    }
    const isMatch = await bcrypt.compare(password,emailExist.password);
    if (isMatch) {
      const token=await emailExist.generateToken()
      console.log(token)
      return res.status(200).json({msg:"Login User Succesfully",emailExist})
    }else{
     return res.status(401).json({msg:"Invalid Email or Password"})
    }
  } catch (error) {
   return res.status(500).json({ msg: `Some error:${error.message}` });
  }
});

//! Get User

router.get("/getUser", authorization , async (req, res) => {
  try {
    const user = req.user;
    console.log(user);
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

module.exports = router;
