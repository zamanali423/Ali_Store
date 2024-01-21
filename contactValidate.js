const z = require("zod");

const contactSchema = z.object({
  firstName: z
    .string({ required_error: "firstName is required" })
    .trim()
    .min(1, { message: "firstName at least 1 character" })
    .max(50, { message: "firstName maximum 50 characters" }),

  lastName: z
    .string({ required_error: "lastName is required" })
    .trim()
    .min(1, { message: "lastName at least 1 character" })
    .max(50, { message: "lastName maximum 50 characters" }),

  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invalid email address" })
    .min(5, { message: "email at least 5 characters" })
    .max(50, { message: "email maximum 50 characters" }),

  phone: z
    .number({ message: "number is required" })
    .min(11, { message: "number at least 11 digits" })
    .max(12, { message: "number maximum 12 digits" }),

  address: z
    .string({ message: "address is required" }),
});

module.exports = contactSchema;
