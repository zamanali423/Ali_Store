const express = require("express");
const User = require("../../models/userModel/register");
const router = express.Router();
const bcrypt = require("bcryptjs");
const signupSchema = require("../../validations/registerValidation");
const loginSchema = require("../../validations/loginValidation");
const validate = require("../../middlewares/validate-middleware");
const authMiddleware = require("../../middlewares/auth-middleware");

router.post("/register", validate(signupSchema), async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const username = firstName + lastName;
  const newUser = new User({ firstName, lastName, email, password });

  try {
    const existEmail = await User.findOne({ email });
    const existUsername = await User.findOne({ username });
    if (existEmail || existUsername) {
      return res
        .status(401)
        .json({ message: "username or email already exist" });
    }
    if (!newUser) {
      return res.status(404).json({ message: "user not found" });
    }
    const token = await newUser.generateToken();
    console.log(token);
    const saveUser = await newUser.save();
    return res.status(201).json({ message: "register successfully", saveUser });
  } catch (error) {
    // res.status(500).json({ error: "internal server error", error });
    next(error);
  }
});

router.post("/login", validate(loginSchema), async (req, res) => {
  const { email, password } = req.body;
  try {
    const existEmail = await User.findOne({ email });

    if (!existEmail) {
      return res.status(400).json({ message: "invalid credentials" });
    }
    // res.cookie("jwt", token, {
    //   httpOnly: true,
    //   secure: true,
    // });
    const match = await bcrypt.compare(password, existEmail.password);
    if (match) {
      res.status(200).json({ message: "login successfully", existEmail });
      const token = await existEmail.generateToken();
      console.log(token);
    } else {
      return res.status(401).json({ message: "invalid email or password" });
    }
  } catch (error) {
    // res.status(500).json("internal server error");
    next(error);
  }
});

router.get("/getUser", authMiddleware, async (req, res) => {
  try {
    const user = req.user;
    console.log(user);
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

module.exports = router;
