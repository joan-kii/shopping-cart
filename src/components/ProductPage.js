import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ProductPageStyled from '../styles/ProductPageStyled';
import itemsList from '../assets/ItemsList';

const ProductPage = (props) => {

  const product = itemsList.find((item) => item.name === props.name); 

  return (
    <ProductPageStyled>
      <div className='content'>
        <Image src={product.image} className='productImage' rounded />
        <div className='productInfo'>
          <h2>{product.name}</h2>
          <p>{product.text}</p>
          <p>{product.price}</p>
          <Button variant='dark'>Go to checkout</Button>
          <Button variant='dark'>Back to shop</Button>
          <Button variant='dark'>Add to cart</Button>
        </div>
      </div>
    </ProductPageStyled>
  )
};

export default ProductPage;
