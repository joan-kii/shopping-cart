import styled from 'styled-components';
import image from '../assets/concert.jpg';
 

const CheckoutStyled = styled.div`

  display: flex;
  justify-content: center;
  flex-grow: 1;
  height: 91vh;
  padding-top: 5%;
  padding-bottom: 2%;
  font-family: 'Amatic SC';
  background-image: url(${image});
  background-color: #0e1111;

  .content {
    border-radius: 5px;
    display: flex;
    justify-content: center;
    width: 50%;
    padding: 30px;
    background-color: white;
  }
  `;

  export default CheckoutStyled;