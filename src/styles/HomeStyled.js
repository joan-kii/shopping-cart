import styled from 'styled-components';
import image from '../assets/concert.jpg';

const HomeStyled = styled.div`
  height: 100vh;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14%;
  background-image: url(${image});
  background-color: #0e1111;

  .banner {
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: 'Rock Salt';
    background-color: #0e1111;
    padding: 15px;
    border-radius: 20px;
  }

  q {
    margin: 1.5em;
    text-align: center;
  }
  `;

export default HomeStyled;
