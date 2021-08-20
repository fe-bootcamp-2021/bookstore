import React from "react";
import { useFormik } from "formik";

import { signUpSchema,signUpInitValues } from "../../utils/schemas/signUpSchema";
import styles from './Auth.module.css'

const SignUp = () => {

  const handleSignUp = (values) => {
    console.log(values)
  }

  const {handleSubmit,errors,touched,getFieldProps} = useFormik({
    initialValues: signUpInitValues,
    validationSchema: signUpSchema,
    onSubmit: handleSignUp,
  });
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        {...getFieldProps("firstName")}
      />
      {touched.firstName && errors.firstName ? (
        <div className={styles.errors}>{errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" type="text" {...getFieldProps("lastName")} />
      {touched.lastName && errors.lastName ? (
        <div className={styles.errors}>{errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" {...getFieldProps("email")} />
      {touched.email && errors.email ? (
        <div className={styles.errors}>{errors.email}</div>
      ) : null}

      <label htmlFor="password">Password</label>
      <input id="password" type="text" {...getFieldProps("password")} />
      {touched.password && errors.password ? (
        <div className={styles.errors}>{errors.password}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};
export default SignUp;
