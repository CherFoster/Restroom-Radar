import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function CreateBathroom() {
  const navigate = useNavigate();

  const initialValues = {
    title: "",
    body: "",
    user: "Add your First and Last name",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Bathroom Name is required"),
    body: Yup.string().required("Bathroom Address is required"),
    user: Yup.string().required("User is required"),
  });

  const handleSubmit = (values) => {
    fetch("http://127.0.0.1:5000/", {
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
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <label htmlFor="title">Bathroom Name:</label>
          <p>Need to add a description or instructions on how to title the name here...</p>
          <Field type="text" id="title" name="title" required />
          <ErrorMessage name="title" component="div" className="error" />

          <label htmlFor="body">Bathroom Address:</label>
          <p>Need to add address breakdown here...</p>
          <Field as="textarea" id="body" name="body" required />
          <ErrorMessage name="body" component="div" className="error" />

          <label htmlFor="user">User:</label>
          <Field type="text" id="user" name="user" required />
          <ErrorMessage name="user" component="div" className="error" />

          <button type="submit">ADD BATHROOM</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateBathroom;
