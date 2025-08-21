import { Gender } from "@/generated/prisma";
import z from "zod";

export const registerValidation = z.object({
  firstName: z
    .string({ error: "First name is required" })
    .min(1, "First name is required"),
  lastName: z
    .string({ error: "Last name is required" })
    .min(1, "Last name is required"),
  mobileNo: z
    .string({ error: "Mobile number is required" })
    .min(10, "Mobile number must be at least 10 digits")
    .max(15, "Mobile number must not exceed 15 digits"),
  age: z
    .string()
    .min(1, "Age is required.")
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val) && val >= 1 && val <= 120, {
      message: "Age must be a number between 1 and 120",
    }),
  gender: z.enum([Gender.MALE, Gender.FEMALE, Gender.OTHER], {
    error: "Gender is required",
  }),
  email: z.email({ error: "Email is required" }).min(1, "Email is required"),
});
