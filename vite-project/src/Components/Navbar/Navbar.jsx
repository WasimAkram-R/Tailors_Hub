import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa'; 

import {Link} from 'react-router-dom'


const ResponsiveNavbar = () => {

    const [expanded, setExpanded] = useState(false); // For toggling the menu

    const toggleNavbar = () => setExpanded(!expanded);


  return (
    <>

<Navbar expanded={expanded} expand="xl" bg="light" variant="light" sticky="top" >
      <Container>
        {/* Logo/Brand on the left */}
        <Navbar.Brand className=''>TailorsHub</Navbar.Brand>

        {/* Center Navigation Links */}
        <Navbar.Toggle
           style={{outline:"none",boxShadow:"none",border:"none"}}
          aria-controls="navbar-nav"
          onClick={toggleNavbar} // Toggle function on click
          className="d-xl-none" // Only show on mobile (hidden on large screens)
        >
          {expanded ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Change icon */}
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav" className=" justify-content-center w-100">
          <Nav className="mx-auto">

            <Nav.Link> <Link to="/" className='text-decoration-none text-black'>Home</Link></Nav.Link>

            <Nav.Link href="#tailors"><Link to="/tailors"className='text-decoration-none text-black '>Tailors</Link></Nav.Link>

            <Nav.Link><Link to="/customers" className='text-decoration-none text-black'>Customers</Link></Nav.Link>

            {/* <Nav.Link>
            <Link to="/showcase"className='text-decoration-none text-black'>Showcase</Link>
            </Nav.Link>*/}

            <Nav.Link>
            <Link to="/contact"className='text-decoration-none text-black'>FAQ</Link>
            </Nav.Link> 

          </Nav>
        </Navbar.Collapse>

        {/* Login/Register buttons, positioned on the right for large screens, center for small */}
        <Navbar.Collapse className="justify-content-end">
          <Nav className="d-none d-xl-flex">
            {/* These buttons will be displayed only on large screens */}
            <Button variant="outline-primary" href="#login" className="me-2">
              Login
            </Button>
            <Button variant="outline-primary" href="#register">
              Register
            </Button>
          </Nav>

          {/* These buttons will be displayed only on small screens (mobile) */}
          <Nav className="d-flex d-xl-none justify-content-center">
            <Button variant="outline-primary" href="#login" className="me-2  mb-3 " style={{width:"30%"}}>
              Login
            </Button>
            <Button variant="outline-primary" href="#register" className="" style={{width:"30%"}}>
              Register
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default ResponsiveNavbar