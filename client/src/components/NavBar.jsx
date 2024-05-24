import React, { useState,useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Modal from './Modal'; // Import your Modal component
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import { AuthContext } from '../utils/context';

import Recruit from '../pages/Recruit';
function NavBar() {
  const [showModal, setShowModal] = useState(false);
  const [SignModal, setShowSign] = useState(false);
  const [recruitModal, setShowRecruit] = useState(false);
  const {fItems,changeItems,user,changeUser} = useContext(AuthContext)

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleSignUp = () => {
    setShowSign(!SignModal);
  };
  const toggleRecruit = () => {
    setShowRecruit(!recruitModal)
  };
  const signOut = ()=>{
     changeUser([]);
  }
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Real state</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to="/opportunities" className="nav-link">browse</Link>
              
            {user.length === 0 ? (
                <>
                  <Nav.Link onClick={toggleModal}>LOG IN</Nav.Link>
                  <Nav.Link onClick={toggleSignUp}>SIGN UP</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={signOut}>LOG OUT</Nav.Link>
              )}
              <Nav.Link onClick={toggleRecruit}>list a property</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={showModal} onClose={toggleModal} Component={Login}/>
      <Modal show={SignModal} onClose={toggleSignUp} Component={SignUp}/>
      <Modal show={recruitModal} onClose={toggleRecruit} Component={Recruit}/>
    </>
  );
}

export default NavBar;

