import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ProductPageStyled from '../styles/ProductPageStyled';
import ItemsListContext from '../assets/ItemsList';

const ProductPage = (props) => {

  const itemsList = useContext(ItemsListContext);

  /* const product = itemsList.find((item) => item.name === props.name); */ 
  const itemIndex = itemsList.findIndex((item) => item.name === props.name);
  const product = itemsList[itemIndex];
  const [showCheckoutButton, setShowCheckoutButton] = useState(false);

  /* const [addedToCart, setAddedToCart] = useState(itemsList[itemIndex].addedToCart); */
  const handleClick = () => {
    itemsList[itemIndex].addedToCart = true;
    setShowCheckoutButton(true);
  };

  console.log(itemsList[itemIndex].addedToCart)
  return (
    <ProductPageStyled>
      <div className='content'>
        <Image src={product.image} className='productImage' />
        <div className='productInfo'>
          <h2 className='productName'>{product.name}</h2>
          <p className='productInfo'>{product.text}</p>
          <p className='productPrice'>{product.price}</p>
          {itemsList[itemIndex].addedToCart && <h3>Added to your cart</h3> }
          <div className='wrapButtons'>
            <Link to='/catalog'>
              <Button 
                variant='outline-dark'
                size='lg' 
                className='button'>Back to shop</Button>
            </Link>
            {!showCheckoutButton && 
              <Link >
                <Button 
                  variant='outline-dark'
                  size='lg' 
                  className='button'
                  onClick={handleClick}>Add to cart</Button>
              </Link>}
            {showCheckoutButton && 
              <Link to='/checkout'>
                <Button 
                variant='outline-dark'
                size='lg' 
                className='button'>Go to checkout</Button>
              </Link>}
          </div>
        </div>
      </div>
    </ProductPageStyled>
  )
};

export default ProductPage;
