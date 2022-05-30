import React, {useState} from "react";

function SignUp({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation,
        }),
      })
        .then((r) => r.json())
        .then(onLogin);
    }

    function handleUsername(e) {
      setUsername(e.target.value)
    }

    function handlePassword(e) {
      setPassword(e.target.value)
    }

    function handleConfirmPassword(e) {
      setPasswordConfirmation(e.target.value)
    }
  
    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3" onChange={handleUsername}>
          <label>Choose username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
          />
        </div>
        <div className="mb-3" onChange={handlePassword}>
          <label>Create password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3" onChange={handleConfirmPassword}>
          <label>Confirm password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </form>
    );
  }

export default SignUp