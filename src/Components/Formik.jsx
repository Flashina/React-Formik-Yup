import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

const Formik = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      //   console.log(formik.values);
    },
    // validate: (values) => {
    //   let errors = {};
    //   if (!values.firstName) {
    //     errors.firstName = "Required";
    //   }
    //   if (!values.lastName) {
    //     errors.lastName = "Required";
    //   }
    //   if (!values.email) {
    //     errors.email = "Required";
    //   } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    //   ) {
    //     errors.email = "Invalid email address";
    //   }
    //   if (!values.password) {
    //     errors.password = "Required";
    //   }
    //   return errors;
    // },
validationSchema:yup.object({
  firstName : yup.string().required( 'This field is required').min(5).max(9),
  lastName : yup.string().required( 'This field is required').min(5).max(9),
  email : yup.string().required( 'This field required'),
  password : yup.string().required('This field is required').min(8)
})

  });


  // console.log(formik.values);

  return (
    <form onSubmit={formik.handleSubmit} className="d-flex flex-column">
      <input
        type="text"
        placeholder="Firstname"
        name="firstName"
        onChange={formik.handleChange}
        className="form-control border border-rounded-2 m-2 p-2"
      />
      <small className="text-danger fw-bold align-self-center">
        {formik.errors.firstName}
      </small>
      <input
        type="text"
        placeholder="Lastname"
        name="lastName"
        onChange={formik.handleChange}
        className="form-control border border-rounded-2 m-2 p-2"
      />
      <small className="text-danger fw-bold align-self-center">{formik.errors.lastName}</small>

      <input
        type="text"
        placeholder="Email"
        name="email"
        onChange={formik.handleChange}
        className="form-control border border-rounded-2 m-2 p-2"
      />
      <small className="text-danger fw-bold align-self-center">{formik.errors.email}</small>

      <input
        type="text"
        placeholder="Password"
        name="password"
        onChange={formik.handleChange}
        className="form-control border border-rounded-2 m-2 p-2"
      />
      <small className="text-danger fw-bold align-self-center">{formik.errors.password}</small>

      <button
        type="submit"
        className="btn btn-outline-warning align-self-center m-2"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Formik;
