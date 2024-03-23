const User = require("../../models/userModel/register");
const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middlewares/auth-middleware");
const Contact = require("../../models/userModel/contact");
const contactValidate = require("../../validations/contactValidate");
const validate = require("../../middlewares/validate-middleware");

router.get("/users", authMiddleware, async (req, res) => {
  try {
    const getAllUsers = await User.find().select({ password: 0 });
    if (!getAllUsers || getAllUsers.length === 0) {
      return res.status(404).json({ message: "Users not found" });
    }
    return res.status(200).json(getAllUsers);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

router.get("/contacts", authMiddleware, async (req, res) => {
  try {
    const getAllContacts = await Contact.find();
    if (!getAllContacts) {
      return res.status(404).json({ message: "Contact not found" });
    }
    return res.status(200).json(getAllContacts);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

router.post("/contacts", validate(contactValidate), async (req, res) => {
  const { firstName, lastName, email, phone, address, message } = req.body;
  try {
    const createContact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      address,
      message,
    });
    if (!createContact) {
      return res.status(404).json({ message: "Do not contact" });
    }
    const saveContact = await createContact.save();
    return res
      .status(200)
      .json({ message: "Your message has been send", saveContact });
  } catch (error) {
    return res.status(500).json({ message: "internal server error", error });
  }
});

module.exports = router;
