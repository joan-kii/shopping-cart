import React from 'react';
import CheckoutStyled from '../styles/CheckoutStyled';
import Image from 'react-bootstrap/Image';
import guitar from '../assets/electric-guitar.jpg';

const Checkout = (props) => {
  
  const items = props.items;
  const cartList = items.filter(item => item.addedToCart === true);
  
  return (
    <CheckoutStyled>
      {cartList.length === 0 && 
      <div className='content'>
        <h2 className='checkoutTitle'>Your Cart is Empty</h2>
        <Image src={guitar} className='guitarImage' />
      </div>}

      {cartList.length > 0 && 
      <div className='content'>
        <h2 className='checkoutTitle'>Your Cart</h2>
      </div>}

    </CheckoutStyled>
  )
};

export default Checkout;
