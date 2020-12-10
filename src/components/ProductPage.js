import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card'; 
import Button from 'react-bootstrap/Button';
import ProductPageStyled from '../styles/ProductPageStyled';

const ProductPage = (props) => {
  return (
    <ProductPageStyled>
      <Image src={props.image} />
      <Card>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Card.Text>{props.price}</Card.Text>
        <Button>Add to cart</Button>
      </Card>
      <Button>Go to checkout</Button>
      <Button>Back to shop</Button>
    </ProductPageStyled>
  )
};

export default ProductPage;
