import styled from 'styled-components';
import image from '../assets/concert.jpg';
 

const ProductPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Amatic SC';
  font-size: 2em;
  background-image: url(${image});
  background-color: #0e1111;  

  .content {
    width: 65%;
    height: 70%
    bacground-color: white;
  }
`;

export default ProductPageStyled;