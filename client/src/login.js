import React, {useState} from "react";

function Login({setCurrentUser}) { 
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/auth')
        .then(res => {
        if(res.ok) {
            res.json().then(user => setCurrentUser(user))
      }
    })
      }

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div className="mb-3" onChange={handleUsername}>
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
          />
        </div>
        <div className="mb-3" onChange={handlePassword}>
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
}

export default Login