import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card'; 
import Button from 'react-bootstrap/Button';
import ProductPageStyled from '../styles/ProductPageStyled';
import itemsList from '../assets/ItemsList';

const ProductPage = (props) => {
  console.log(props)
  const product = itemsList.find((i) => i.name === props.name); 

  return (
    <ProductPageStyled>
      <Image src={product.image} />
      <Card>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.text}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
        <Button>Add to cart</Button>
      </Card>
      <Button>Go to checkout</Button>
      <Button>Back to shop</Button>
    </ProductPageStyled>
  )
};

export default ProductPage;
