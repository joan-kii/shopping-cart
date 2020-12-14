import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Title from '../styles/TitleStyled';
import LinkStyled from '../styles/LinkStyled';
import { BsBag as Cart } from 'react-icons/bs';

const Topbar = () => {
  return (
    <header 
      style={{
        position: 'fixed',
        zIndex: '1',
        top: '0',
        width: '100%',
        backgroundColor: '#0e1111'}} >
      <Navbar 
        className='justify-content-between'>

        <Navbar.Brand>
          <Link to='/'>
            <Title>guitART</Title>
          </Link>
        </Navbar.Brand>

        <Nav>

          <Nav>
            <Link to='/'>
              <LinkStyled>Home</LinkStyled>
            </Link>
          </Nav>

          <Nav>
            <Link to='/catalog'>
              <LinkStyled>Shop</LinkStyled>
            </Link>
          </Nav>

          <Nav>
            <Link to='/checkout'>
              <LinkStyled>
                <Cart className='cartIcon' />
                <span className='itemsIcon'>0</span>
              </LinkStyled>
            </Link>
          </Nav>
        </Nav>

      </Navbar>   
    </header>
  )
};

export default Topbar;
