import * as Yup from "yup";

export const userSchema = Yup.object({
  name: Yup.string()
    .trim()
    .matches(/^[a-zA-ZÀ-ÿ' -]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes")
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be not more than 50 characters long")
    .required("Name is required"),

  email: Yup.string()
    .trim()
    .email("Invalid email format")
    .required("Email is required"),
});
