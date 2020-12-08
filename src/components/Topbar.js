import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Title from '../styles/TitleStyled';
import LinkStyled from '../styles/LinkStyled';

const Topbar = () => {
  return (
    <header 
      style={{backgroundColor: '#0e1111'}} >
      <Navbar 
        className='justify-content-between'>

        <Navbar.Brand>
          <Link to='/'>
            <Title>guitART</Title>
          </Link>
        </Navbar.Brand>

        <Nav>

          <Nav.Link>
            <Link to='/'>
              <LinkStyled>Home</LinkStyled>
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to='/catalog'>
              <LinkStyled>Shop</LinkStyled>
            </Link>
          </Nav.Link>

        </Nav>

      </Navbar>   
    </header>
  )
};

export default Topbar;
