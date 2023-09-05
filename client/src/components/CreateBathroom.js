import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateBathroom() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [user, setUser] = useState("Add your First and Last name");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, user };

    fetch("http://127.0.0.1:5000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      navigate("/bathroom");
    });
  };

  return (
    <div className="home-section">
      <h2>Add A New Bathroom = NEEDS TO BE FORMIX</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>Bathroom Name:</label>
        <p>Need to add a description or instructions on how to title the name here...</p>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Bathroom Address</label>
        <p>Need to add address breakdown here...</p>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>User:</label>
        <input
          type="text"
          required
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button>ADD BATHROOM</button>
      </form>
    </div>
  );
}

export default CreateBathroom;