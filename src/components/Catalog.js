import React from 'react';
import CardItem from './CardItem';
import itemsList from '../assets/ItemsList';
import { Link } from 'react-router-dom';

const Catalog = () => {

  const handleClick = (index) => {
    <Link to={`/${itemsList[index].name}`} />
  };

  const items = itemsList.map((item, index) => 
  <CardItem
    key={index}
    path={item.path}
    name={item.name}
    price={item.price}
    onClick={() => handleClick(index)} />
    );

  return (
    <div>
      {items.slice(0, 4)}
      {items.slice(4, 8)}
    </div>
  );
}

export default Catalog;