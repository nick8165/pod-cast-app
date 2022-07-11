import NavBar from "./Navigation/Navbar.js";
import Home from "./home"
import Playlist from "./playlist"
import SignUp from "./signup"
import Login from "./login"
import MyPodCasts from "./mypodcasts"
import { Routes, Route, Link } from 'react-router-dom'
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

  function onLogin(user) {
    setCurrentUser(user)
  }

  function handleLogout() {
    setCurrentUser("")
    fetch(`/logout`, {
      method: 'DELETE',
    })
    .then((res) => {
      if(res.ok){
          console.log(res)
      } else {
          res.json().then(console.log)
      }
    })
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
                <Route exact path="/" element={<Login onLogin={onLogin} />} />
                <Route path="/sign-in" element={<Login onLogin={onLogin} />} />
                <Route path="/sign-up" element={<SignUp onLogin={onLogin} />} />
              </Routes>
            </div>
          </div>
        </div>
  )
  return (
    <div class="container p-3 my-3 bg-dark text-white">
      <button type="button" class="btn btn-link" onClick={handleLogout}>Logout</button>
      <NavBar />
      <Routes>
        <Route exact path="mypodcasts" element={<MyPodCasts user={currentUser}/>} />
        <Route exact path="playlist" element={<Playlist user={currentUser}/>} />
        <Route exact path="/" element={<Home user={currentUser}/>} />
      </Routes>
    </div>
  );
}

export default App;
