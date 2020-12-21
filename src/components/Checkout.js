import React from 'react';
import CheckoutStyled from '../styles/CheckoutStyled';
import Image from 'react-bootstrap/Image';
import guitar from '../assets/electric-guitar.jpg';

const Checkout = (props) => {
  
  return (
    <CheckoutStyled>
      <div className='content'>
        <h2 className='checkoutTitle'>Your Cart is Empty</h2>
        <Image src={guitar} className='guitarImage' />
      </div>
    </CheckoutStyled>
  )
};

export default Checkout;
