import styled from 'styled-components';

const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 65%;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px black solid;

  .cartItemImage {
    padding: 2rem 0;
    width: 16rem;
  }

  .cartItemInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: 'Amatic SC';
    font-size: 2em;
  }
`;

export default CartItem;