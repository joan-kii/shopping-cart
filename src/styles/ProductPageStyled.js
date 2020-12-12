import styled from 'styled-components';
import image from '../assets/concert.jpg';
 

const ProductPageStyled = styled.div`

  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding-top: 5%;
  padding-bottom: 2%;
  font-family: 'Amatic SC';
  background-image: url(${image});
  background-color: #0e1111;  
  
  .content {
    border-radius: 5px;
    display: flex;
    justify-content: center;
    height: auto;
    width: 70%;
    padding: 30px;
    background-color: white;
  }

  .productImage {
    border-radius: 5px;
    padding: 10px 10px;
  }

  .productInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .productName {
    padding: 1em;
    font-size: 1.5em;
  }

  .productInfo{
    padding: 1em;
    font-size: 1.2em;
  }

  .productPrice {
    padding: 1em;
    font-size: 1.5em;
  }

  .wrapButtons {
    display: flex;
    
    justify-content: space-between;
  }

  .button {
    padding: 0.5em;
    margin: 0.5em;
  }
`;

export default ProductPageStyled;