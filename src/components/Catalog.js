import React, { useContext } from 'react';
import CardItem from './CardItem';
import RowStyled from '../styles/RowStyled';
import ItemsListContext from '../assets/ItemsList';
import { Link } from 'react-router-dom';
import image from '../assets/concert.jpg';

const Catalog = () => {

  const itemsList = useContext(ItemsListContext);
  const items = itemsList.map((item, index) => 
  <Link 
    key={index} 
    to={`/catalog/${item.name}`}
    style={{textDecoration: 'none', color: 'black'}}>
    <CardItem
      image={item.image}
      name={item.name}
      price={item.price} />
    </Link>
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