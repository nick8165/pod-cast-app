import NavBar from "./Navigation/Navbar.js";
import Home from "./home"
import Playlist from "./playlist"
import SignUp from "./signup"
import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import React, { useState } from "react"

function App() {
  const [page, setPage] = useState("/")

  return (
    <Container>
      <NavBar onChangePage={setPage} />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/playlist" element={<Playlist/>} />
          <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </Container>
  );
}

export default App;
