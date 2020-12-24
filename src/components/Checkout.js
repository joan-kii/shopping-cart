import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutStyled from '../styles/CheckoutStyled';
import CartItemStyled from '../styles/CartItemStyled';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import guitar from '../assets/electric-guitar.jpg';

const Checkout = (props) => {
  
  const items = props.items;
  const cartList = items.filter(item => item.addedToCart === true);
  const popover = (
    <Popover>
      <Popover.Title as='h3'>
        This is just a fake web!
      </Popover.Title>
      <Popover.Content>
        Please visit <a href='https://www.nashguitars.com' target='_blank' rel='noreferrer'>Nashguitars</a> and enjoy with these little pieces of art.
      </Popover.Content> 
    </Popover>
  )
  
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
        {cartList.map((item, index) => 

          <CartItemStyled key={index}>

            <Image src={item.image} className='cartItemImage' rounded/>

            <div className='cartItemInfo'>
              <h3>{item.name}</h3>

              <p>
                {`${item.price.toLocaleString('de-DE')} €`}
              </p>

              <Form.Label className='label'>
                Quantity
              </Form.Label>
              <Form.Control as='select' className='select'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Control>

              <Button
                variant='outline-dark'
                size='lg'
                className='button'>
                Remove Item
              </Button>
            </div>

          </CartItemStyled>

        )}
        <h2 className='total'>Total: {}</h2> 
        <div className='checkoutButtons'>
          <Link to='/catalog'>
            <Button
              variant='outline-dark'
              size='lg'
              className='button'>
              Back to Shop
            </Button>
          </Link>

          <OverlayTrigger
            trigger='click'
            placement='top'
            overlay={popover}>
            <Button
              variant='outline-dark'
              size='lg'
              className='button'>
              Proceed to Payment
            </Button>
          </OverlayTrigger>
        </div>
      </div>}

    </CheckoutStyled>
  )
};

export default Checkout;
