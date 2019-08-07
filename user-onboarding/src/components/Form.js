import React from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";

const OnboardingForm = ({ errors, touched, values }) => {
  return (
    <div className="onboarding-form">
      <Form>
        <Field type="text" name="name" placeholder="Name" />
        <Field type="email" name="email" placeholder="Email" />
        <Field type="password" name="password" placeholder="Password" />
        <Field type="checkbox" name="terms" checked={values.terms} />
        <button type="submit">Submit</button>
      </Form>
    </div>
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

  handleSubmit(values) {
    axios
      .post(`https://regres.in/api/users`, values)
      .then(res => console.log(res))
      .catch(err => console.log(err.response));
  }
})(OnboardingForm);

export default FormikOnboardingForm;
