import styled from 'styled-components';
import image from '../assets/concert.jpg';
 

const CheckoutStyled = styled.div`

  display: flex;
  justify-content: center;
  flex-grow: 1;
  min-height: 91vh;
  padding-top: 7%;
  padding-bottom: 2%;
  font-family: 'Amatic SC';
  background-image: url(${image});
  background-color: #0e1111;

  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 40%;
    background-color: white;
    border-radius: 5px;
    padding: 30px;
  }

  .checkoutTitle {
    font-size: 3em;
  }

  .guitarImage {
    margin-top: 70px;
    width: 10em;
    height: 10em;
  }

  .total {
    width: 100%;
    margin: 2em 0;
    border-top: 1px grey solid;
  }

  .checkoutButtons {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  `;

  export default CheckoutStyled;