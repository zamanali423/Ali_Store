const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    unique: true,
    required: true,
  },
  lastName: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//? Generate Token
registerSchema.methods.generateToken = async function () {
  try {
    const secretKey = process.env.SECRET_KEY;
    const token = await jwt.sign(
      { _id: this._id.toString(), email: this.email },
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

//? Hashing Password Field
registerSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

module.exports = mongoose.model("User", registerSchema);
