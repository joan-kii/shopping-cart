import React from 'react';
import Card from 'react-bootstrap/Card';
import CardStyled from '../styles/CardStyled';

const CardItem = (props) => {
  return (
    <CardStyled>
      <Card style={{width: '18rem'}} onClick={props.onClick}>
        <Card.Img variant='top' src={props.path} />
        <Card.Body>
          <Card.Title className='title' >{props.name}</Card.Title>
          <Card.Text className='price' >{props.price}</Card.Text>
        </Card.Body>  
      </Card>
    </CardStyled>
  );
}

export default CardItem;