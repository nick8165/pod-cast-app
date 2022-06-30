import React from "react";
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function NavBar() {
  return (
    <Navbar>
      <Nav class="navbar navbar-expand-sm bg-light justify-content-left">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/mypodcasts">
          <Nav.Link>My Podcasts</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/playlist">
          <Nav.Link>Playlist</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
    )
  }  

export default NavBar;