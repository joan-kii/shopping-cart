import React from 'react';
import Card from 'react-bootstrap/Card';
import CardStyled from '../styles/CardStyled';

const CardItem = (props) => {

  const priceItemFormatted = props.price.toLocaleString('de-DE') + ' €';
  
  return (
    <CardStyled>
      <Card style={{width: '18rem'}} onClick={props.onClick}>
        <Card.Img variant='top' src={`${props.image}`} />
        <Card.Body>
          <Card.Title className='title' >
            {props.name}
          </Card.Title>
          <Card.Text className='price' >
            {priceItemFormatted}
          </Card.Text>
        </Card.Body>  
      </Card>
    </CardStyled>
  );
}

export default CardItem;
