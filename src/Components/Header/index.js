import React  from "react";
import {Link} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import './Header.style.scss';
export default function HeaderIndex(){
    
    return(
        <>
        <Navbar  sticky="top" collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>ENTERTAINMENT KA BAAP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll"/>
        <Navbar.Collapse id="navbarScroll" >
          <Nav className="me-auto" >

          <NavLink  eventKey="1" as={Link} to="/">Home</NavLink>
          <NavLink  eventKey="1" as={Link} to="/trending">Trending</NavLink>
          <NavLink  eventKey="1" as={Link} to="/movies">Movies</NavLink>
          <NavLink  eventKey="1" as={Link} to="/tv-series">Tv Series</NavLink>
          <NavLink  eventKey="1" as={Link} to="/search-item">Search</NavLink>

            {/* <Link className="nav-link" to="/" >Home</Link>
            <Link className="nav-link"  to="/trending" >Trending</Link>
            <Link className="nav-link"  to="/movies" onClick={() => setExpanded(true)}>Movies</Link>
            <Link className="nav-link"  to="/tv-series" onClick={() => setExpanded(true)}>Tv Series</Link>
            <Link className="nav-link"  to="/search-item" onClick={() => setExpanded(true)}>Search</Link> */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}