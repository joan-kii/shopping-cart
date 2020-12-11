import styled from 'styled-components';
import image from '../assets/concert.jpg';
 

const ProductPageStyled = styled.div`

  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding-top: 5%;
  padding-bottom: 2%;
  border-radius: 5px;
  font-family: 'Amatic SC';
  font-size: 1.5em;
  background-image: url(${image});
  background-color: #0e1111;  

  .content {
    display: flex;
    justify-content: center;
    height: auto;
    width: 70%;
    padding: 20px 40px;
    background-color: white;
  }

  .productImage {
    border-radius: 5px;
    padding: 10px 10px;
  }

  .productInfo {
    display: flex;
    flex-direction: column;
  }
`;

export default ProductPageStyled;