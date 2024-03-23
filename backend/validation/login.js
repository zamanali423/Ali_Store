const z = require("zod");

const login = z.object({
  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Invalid Email Address" }),

  password: z
    .string({ required_error: "Password is Required" })
    .trim()
    .min(6, { message: "Password atleast 6 characters" }),
});

module.exports = login;
