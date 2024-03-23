const z = require("zod");

const register = z
  .object({
    name: z
      .string({ required_error: "Name is Required" })
      .trim()
      .min(3, { message: "Name at least 3 characters" }),

    email: z
      .string({ required_error: "Email is Required" })
      .trim()
      .email({ message: "Invalid Email Address" }),

    password: z
      .string({ required_error: "Password is Required" })
      .trim()
      .min(6, { message: "Password atleast 6 characters" }),

    confirm: z
      .string({ required_error: "Password is Required" })
      .trim()
      .min(6, { message: "Password atleast 6 characters" }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

module.exports = register;
