import React from 'react';
import Button from 'react-bootstrap/Button';
import HomeStyled from './styles/HomeStyled';
import Title from './styles/TitleStyled';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <HomeStyled>
      <div className='banner'>
        <Title>guitART</Title>
        <q>Works of art make rules;<br/>
           rules do not make works of arts.<br/>
           - Claude Debussy</q>
        <Link to='/catalog'>
          <Button 
            variant='dark'>
              Visit Our Shop
          </Button>
        </Link>
      </div>
    </HomeStyled>
  )
};

export default App;
