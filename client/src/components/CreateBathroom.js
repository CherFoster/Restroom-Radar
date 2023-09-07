import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function CreateBathroom() {
  const navigate = useNavigate();

  const initialValues = {
    title: "",
    streetNumber: "",
    streetName: "",
    city: "",
    zipCode: "",
    // user: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Bathroom Name is required"),
    streetNumber: Yup.string().required("Street Number is required"),
    streetName: Yup.string().required("Street Name is required"),
    city: Yup.string().required("City is required"), //needs to be Bk,M,SI,Q,Bx
    zipCode: Yup.string().max(5).required("Zip Code is required"), 
    // user: Yup.string().required("User is required"),
  });

  const handleSubmit = (values) => {
    fetch("http://127.0.0.1:5555", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).then(() => {
      navigate("/bathroom");
    });
  };

  return (
    <div className="home-section">
      <h2>Add A New Bathroom</h2>
      <p>Here is a chance to share a bathroom you've spotted in NYC. Very easy to add one. Follow the prompts below. </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <label htmlFor="title">Bathroom Name:</label>
          <p>Try to add as much detail as professionally possible. ex. Looney Tunes Bathroom - 5th Floor</p>
          <Field type="text" id="title" name="title" placeholder="add bathroom" required />
          <ErrorMessage name="title" component="div" className="error" />

          <label htmlFor="streetNumber">Street Number:</label>
          <Field type="text" id="streetNumber" name="streetNumber" placeholder="street number" required />
          <ErrorMessage name="streetNumber" component="div" className="error" />

          <label htmlFor="streetName">Street Name:</label>
          <Field type="text" id="streetName" name="streetName" placeholder="Street number" required />
          <ErrorMessage name="streetName" component="div" className="error" />

          <label htmlFor="city">City:</label>
          <Field type="text" id="city" name="city" placeholder="city" required />
          <ErrorMessage name="city" component="div" className="error" />

          <label htmlFor="zipCode">Zip Code:</label>
          <Field type="text" id="zipCode" name="zipCode" placeholder="zip code" required />
          <ErrorMessage name="zipCode" component="div" className="error" />
{/* 
          <label htmlFor="user">User:</label>
          <Field type="text" id="user" placeholder="add your username" name="user" required />
          <ErrorMessage name="user" component="div" className="error" /> */}

          <button type="submit">ADD BATHROOM</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateBathroom;
