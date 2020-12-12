import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ProductPageStyled from '../styles/ProductPageStyled';
import itemsList from '../assets/ItemsList';

const ProductPage = (props) => {

  const product = itemsList.find((item) => item.name === props.name); 

  return (
    <ProductPageStyled>
      <div className='content'>
        <Image src={product.image} className='productImage' />
        <div className='productInfo'>
          <h2 className='productName'>{product.name}</h2>
          <p className='productInfo'>{product.text}</p>
          <p className='productPrice'>{product.price}</p>
          <div className='wrapButtons'>
            <Link to='/catalog'>
              <Button variant='outline-dark'size='lg' className='button'>Back to shop</Button>
            </Link>
            <Link >
              <Button variant='outline-dark'size='lg' className='button'>Add to cart</Button>
            </Link>
            <Link >
              <Button variant='outline-dark'size='lg' className='button'>Go to checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </ProductPageStyled>
  )
};

export default ProductPage;
