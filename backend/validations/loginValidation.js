const z = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "email not register" })
    .min(5, { message: "email at least 5 characters" })
    .max(50, { message: "email maximum 50 characters" }),

  password: z
    .string({ required_error: "password is required" })
    .min(6, { message: "password at least 6 characters" })
    .max(50, { message: "password maximum 50 characters" }),
});

module.exports = loginSchema;
