import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';


const Navbarmenu = () =>{
    return(
        <div>
        <Navbar collapseOnSelect expand="md" variant="dark">
            <Navbar.Brand href="/FoodWebsite">Fun Food and Frolic</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/FoodWebsite" className="px-5">HOME</Nav.Link>
                <Nav.Link href="/FoodWebsite" className="px-5">ABOUT</Nav.Link>
                <Nav.Link href="/FoodWebsite" className="px-5">PLANS</Nav.Link>
                <Nav.Link href="/FoodWebsite" className="px-5">CONTACT US</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default Navbarmenu;