const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirm: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});

userSchema.methods.generateToken = async function () {
  try {
    const secretKey = process.env.SECRET_KEY;
    const token = await jwt.sign(
      { _id: this._id, email: this.email },
      secretKey,
      { expiresIn: "30d" }
    );
    this.tokens = this.tokens.concat({ token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

userSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isModified("confirm")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.confirm = await bcrypt.hash(this.confirm, 12);
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
