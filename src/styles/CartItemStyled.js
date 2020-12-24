import styled from 'styled-components';

const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;
  margin-bottom: 2em;
  justify-content: space-around;
  align-items: center;
  border: 1px grey solid;
  border-radius: 8px;

  .cartItemImage {
    padding: 2rem 1rem;
    width: 16rem;
  }

  .cartItemInfo {
    display: flex;
    flex-direction: column;
    height: 80%;
    padding-left: 0.4rem;
    padding-right: 0.6rem;
    align-items: center;
    font-family: 'Amatic SC';
    font-size: 2em;
  }

  .label {
    margin: 0.5em 0.5em;
    font-size: 0.8em;
  }

  .select {
    font-size: 0.6em; 
  }

  .button {
    align-self: flex-end;
    padding: 0.5em;
    margin: 1.5em 0 0.5em;
  }
`;

export default CartItem;