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
    align-items: center;
    flex-direction: column;
    width: 50%;
    padding: 30px;
    background-color: white;
  }

  .checkoutTitle {
    margin-top: 20px;
    font-size: 3em;
  }

  .guitarImage {
    margin-top: 70px;
    width: 10em;
    height: 10em;
  }
  `;

  export default CheckoutStyled;