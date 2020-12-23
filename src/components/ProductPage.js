import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ProductPageStyled from '../styles/ProductPageStyled';

const ProductPage = (props) => {

  const itemsList = props.items;
  const itemIndex = itemsList.findIndex((item) => item.name === props.name);
  const product = itemsList[itemIndex];
  const priceItemFormatted = product.price.toLocaleString('de-DE') + ' €';
 
  const handleClick = () => {
    props.toggleItemToCart(itemIndex, !product.addedToCart);
  };

  return (
    <ProductPageStyled>
      <div className='content'>
        <Image src={product.image} className='productImage' />
        <div className='productInfo'>
          <h2 className='productName'>{product.name}</h2>
          <p className='productInfo'>{product.text}</p>
          <p className='productPrice'>{priceItemFormatted}</p>
          {product.addedToCart && <h3>Added to your cart</h3> }
          <div className='wrapButtons'>
            <Link to='/catalog'>
              <Button 
                variant='outline-dark'
                size='lg' 
                className='button'>Back to shop</Button>
            </Link>
            {!product.addedToCart && 
              <Link to='/checkout'>
                <Button 
                  variant='outline-dark'
                  size='lg' 
                  className='button'
                  onClick={handleClick}>Add to cart</Button>
              </Link>}
            {product.addedToCart && 
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
