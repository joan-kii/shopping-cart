import React from 'react';
import CheckoutStyled from '../styles/CheckoutStyled';
import Image from 'react-bootstrap/Image';
import guitar from '../assets/electric-guitar.png';

const Checkout = (props) => {
  return (
    <CheckoutStyled>
      <div className='content'>
        <h2>Your Cart is Empty</h2>
        <Image src={guitar} fluid />
      </div>
    </CheckoutStyled>
  )
};

export default Checkout;
