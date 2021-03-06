import React, { useContext } from 'react';
import { ItemsContext } from '../assets/ItemsList';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Title from '../styles/TitleStyled';
import LinkStyled from '../styles/LinkStyled';
import { BsBag as Cart } from 'react-icons/bs';

const Topbar = () => {

  const { items } = useContext(ItemsContext);
  const cartList = items.filter(item => item.addedToCart === true);

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
          <Link to='/shopping-cart'>
            <Title>guitART</Title>
          </Link>
        </Navbar.Brand>

        <Nav>

          <Nav>
            <Link to='/shopping-cart'>
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
                <span className='itemsIcon'>{cartList.length}</span>
              </LinkStyled>
            </Link>
          </Nav>
        </Nav>

      </Navbar>   
    </header>
  )
};

export default Topbar;
