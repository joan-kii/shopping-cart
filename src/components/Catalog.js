import React from 'react';
import CardItem from './CardItem';
import RowStyled from '../styles/RowStyled';
import itemsList from '../assets/ItemsList';
import { Link } from 'react-router-dom';
import image from '../assets/concert.jpg';

const Catalog = () => {

  const handleClick = (index) => {
    <Link to={`/${itemsList[index].name}`} />
    console.log(itemsList[index].name)
  };

  const items = itemsList.map((item, index) => 
  <CardItem
    key={index}
    image={item.image}
    name={item.name}
    price={item.price}
    onClick={() => handleClick(index)} />
    );

  return (
    <div style={{
          marginTop: '80px',
          backgroundImage: `url(${image})`}}>
      <RowStyled>
        {items.slice(0, 4)}
      </RowStyled>
      <RowStyled>
        {items.slice(4, 8)}
      </RowStyled>
    </div>
  );
};

export default Catalog;