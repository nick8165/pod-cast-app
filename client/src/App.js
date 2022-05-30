import NavBar from "./Navigation/Navbar.js";
import Home from "./home"
import Playlist from "./playlist"
import SignUp from "./signup"
import Login from "./login"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Container } from "react-bootstrap"
import React, { useState, useEffect } from "react"

function App() {
  const [currentUser, setCurrentUser] = useState("")

  useEffect(() => {
    fetch('/auth')
    .then(res => {
      if(res.ok) {
        res.json().then(user => setCurrentUser(user))
      }
    })
  },[])

  function onLogin(e) {
    e.preventDefault()
    console.log("works")
  }
  if(!currentUser) return (
    <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={'/sign-in'}>
                Pods
              </Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={'/sign-in'}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/sign-up'}>
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route exact path="/" element={<Login setCurrentUser={setCurrentUser} />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
              </Routes>
            </div>
          </div>
        </div>
  )
  return (
    <Container>
        <NavBar />
        <Home />
        <Playlist />
    </Container>
  );
}

export default App;
