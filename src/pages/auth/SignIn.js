import React from "react";
import { useFormik } from "formik";

import {
  signInSchema,
  signInInitValues,
} from "../../utils/schemas/signInSchema";
import styles from "./Auth.module.css";

const SignIn = () => {
  const handleSign = (values) => {
    console.log(values);
  };

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: signInInitValues,
    validationSchema: signInSchema,
    onSubmit: handleSign,
  });
  return (
    <form onSubmit={handleSubmit}>
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

export default SignIn;
