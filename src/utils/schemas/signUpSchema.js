import * as Yup from "yup";
import { errorMessages,Regex } from "./constants";
 export  const signUpInitValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }
 export const  signUpSchema =  Yup.object({
    firstName: Yup.string()
      .max(15,errorMessages.max(15))
      .required("Required"),

    lastName: Yup.string()
      .max(20, errorMessages.max(20))
      .required(errorMessages.required),
    email: Yup.string().email(errorMessages.email).required(errorMessages.email),

    password: Yup.string()
    .required(errorMessages.required)
    .matches(
      Regex.passwordMatches,
      errorMessages.password
    )
  })