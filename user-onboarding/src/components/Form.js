import React, { useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { UserForm } from "./Styles";

const OnboardingForm = ({
  errors,
  touched,
  values,
  status,
  users,
  setUsers
}) => {
  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status]);

  return (
    <Form>
      <UserForm>
        <Field type="text" name="name" placeholder="Name" />
        {touched.name && errors.name && <p className="error">{errors.name}</p>}

        <Field type="email" name="email" placeholder="Email" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <label>
          Terms of Service
          <Field type="checkbox" name="terms" checked={values.terms} />
        </label>
        {touched.terms && errors.terms && (
          <p className="error">{errors.terms}</p>
        )}

        <button type="submit">Submit</button>
      </UserForm>
    </Form>
  );
};

const FormikOnboardingForm = withFormik({
  mapPropsToValues({ name, email, password, terms }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      terms: terms || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required("Password is required"),
    terms: Yup.bool().oneOf([true], "Terms must be accepted to proceed")
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post(`https://reqres.in/api/users/`, values)
      .then(res => setStatus(res.data))
      .catch(err => console.log(err.response));
  }
})(OnboardingForm);

export default FormikOnboardingForm;
