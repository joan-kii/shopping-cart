import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LinkStyled from '../styles/LinkStyled';

const Footer = () => {
  return (
    <footer 
      style={{position: 'fixed', 
              bottom: 0, 
              width: '100%',
              backgroundColor: '#0e1111'}} >

      <Navbar className='justify-content-around'>
        <Nav>
          <Nav.Link 
            href='https://www.nashguitars.com' 
            target='_blank'>
            <LinkStyled>Nashguitars</LinkStyled>
          </Nav.Link>

          <Nav.Link 
            href='https://www.theodinproject.com' 
            target='_blank'>
            <LinkStyled>The Odin Project</LinkStyled>
          </Nav.Link>

          <Nav.Link 
            href='https://github.com/joan-kii?tab=repositories' 
            target='_blank'>
            <LinkStyled>joankii's Github</LinkStyled>
          </Nav.Link>
        </Nav>
      </Navbar>  
       
    </footer>
  )
};

export default Footer;