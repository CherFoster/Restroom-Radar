import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function CreateBathroom() {
  const navigate = useNavigate();

  const initialValues = {
    bathroom_name: "", 
    street_num: "",    
    street_name: "",   
    city: "",          
    zip_code: "",
    // user: "",
  };

  const validationSchema = Yup.object().shape({
    bathroom_name: Yup.string().required("Bathroom Name is required"), 
    street_num: Yup.string().required("Street Number is required"),    
    street_name: Yup.string().required("Street Name is required"),    
    city: Yup.string().required("City is required"),                   
    zip_code: Yup.string().max(5).required("Zip Code is required"),
    // user: Yup.string().required("User is required"),
  });

  const handleSubmit = (values) => {
    fetch("http://127.0.0.1:5555/bathrooms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        navigate("/bathrooms");
      })
      // .catch((error) => {
      //   console.error("Fetch error:", error);
      // });
  };

  const cityOptions = [
    "Brooklyn",
    "Queens",
    "New York",
    "Staten Island",
    "Bronx",
  ];
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
          <label htmlFor="bathroom_name">Bathroom Name:</label>
          <p>Try to add as much detail as professionally possible. ex. Looney Tunes Bathroom - 5th Floor</p>
          <Field type="text" id="bathroom_name" name="bathroom_name" placeholder="add bathroom" required />
          <ErrorMessage name="bathroom_name" component="div" className="error" />

          <label htmlFor="street_num">Street Number:</label>
          <Field type="text" id="street_num" name="street_num" placeholder="street number" required />
          <ErrorMessage name="street_num" component="div" className="error" />

          <label htmlFor="street_name">Street Name:</label>
          <Field type="text" id="street_name" name="street_name" placeholder="Street number" required />
          <ErrorMessage name="street_name" component="div" className="error" />

          <label htmlFor="city">City:</label>
          <Field as="select" id="city" name="city" required>
            <option value="">Select a city</option>
            {cityOptions.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </Field>
          <ErrorMessage name="city" component="div" className="error" />

          <label htmlFor="zip_code">Zip Code:</label>
          <Field type="text" id="zip_code" name="zip_code" placeholder="zip code" required />
          <ErrorMessage name="zip_code" component="div" className="error" />
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
