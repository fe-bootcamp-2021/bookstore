import * as Yup from "yup";
import { errorMessages, Regex } from "./constants";

export const signInInitValues = {
  email: "",
  password: "",
};

export const signInSchema = Yup.object({
    email: Yup.string().email(errorMessages.email).required(errorMessages.email),
    password: Yup.string()
    .required(errorMessages.required)
    .matches(
      Regex.passwordMatches,
      errorMessages.password
    )
  })