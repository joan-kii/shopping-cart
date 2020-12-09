import styled from 'styled-components';

const CardStyled = styled.div`
  font-family: 'Amatic SC';
  font-size: 2em;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 2px 2px 20px grey;
  cursor: pointer;
  transition: transform 0.2s linear;
  :hover{
    transform: scale(1.03);
  }

  .title {
    font-size: 1em;
    padding: 6px;
    text-align: center;
    border-radius: 5px;
  }

  .price {
    text-align: center;  
  }
`;

export default CardStyled;