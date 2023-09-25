import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Signup({ login }) {
  const navigate = useNavigate();
  const initialValues = {
    username: '',
    password: '',
  };

  // State variable to track signup status
  const [signupError, setSignupError] = useState(null);

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(7, 'Username must be at least 7 characters long')
      .required('Username is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters long'),
  });

  const handleSubmit = (values) => {
    fetch("/signup", {
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
        login(values);
        navigate("/bathrooms");
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setSignupError("Username already exists or another error occurred. Please try again.");
      });
  };

  return (
    <div>
      <h1>Create an account</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="form">
              <label htmlFor="username">Username</label>
              <Field
                type="text"
                id="username"
                name="username"
                required
              />
              <ErrorMessage name="username" component="div" className="error" />

              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                required
              />
              <ErrorMessage name="password" component="div" className="error" />
              <button type="submit">Create User</button>
              {signupError && <div className="error">{signupError}</div>}
            </div>
            <h4>Create a username and password. Username must be seven or more characters long. Password should be unique.</h4>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;

