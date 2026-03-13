import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const style1 = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const style2 = {
    width: "350px",
    padding: "30px",
    border: "1px solid hsl(0,0%,80%)",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const style3 = {
    marginLeft: "15px",
    padding: "10px",
    marginTop: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const btnStyle = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    fontSize: "16px",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Data Saved Successfully..");
  };

  return (
    <div style={style1}>
      <div style={style2}>
        <h2>Submission Form</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={style3}
            required
            id="name"
          />

          <br /><br />

          <label htmlFor="email">Email: </label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={style3}
            required
            id="email"
          />

          <br /><br />

          <label htmlFor="age">Age: </label>
          <input
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={style3}
            required
            id="age"
          />

          <br /><br />

          <button type="submit" style={btnStyle}>Submit</button>
        </form>

        <p>{message}</p>
      </div>
    </div>
  );
}

export default Form;