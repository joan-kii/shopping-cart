import styled from 'styled-components';

const CardStyled = styled.div`
  font-family: 'Rock Salt';
  margin-top: 20px;
  box-shadow: 5px 2px 20px black;
  cursor: pointer;
  transition: transform 0.2s linear;
  :hover{
    transform: scale(1.03);
  }

  .title {
    color: white;
    padding: 6px;
    background-image: radial-gradient(black, black, white);
    text-align: center;
    border-radius: 5px;
  }

  .price {
    text-align: center;  
  }
`;

export default CardStyled;