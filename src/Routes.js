import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ItemsContext } from './assets/ItemsList';
import Home from './components/Home';
import Catalog from './components/Catalog';
import ProductPage from './components/ProductPage';
import Checkout from './components/Checkout';

const Routes = () => {
  
  const { items, toggleItemToCart } = useContext(ItemsContext);

  return (
    <Switch>
      <Route exact path='/' component={Home} />

      <Route exact 
        path='/catalog' 
        render={(props) => (
          <Catalog {...props} items={items} />
        )} />

      <Route exact 
        path='/catalog/:name'
        render={(routeProps) => (
          <ProductPage 
            name={routeProps.match.params.name} 
            items={items} 
            toggleItemToCart={toggleItemToCart} />
        )} />

      <Route exact 
        path='/checkout'
        render={(props) => (
          <Checkout 
            {...props}
            items={items} 
            toggleItemToCart={toggleItemToCart} />
        )} />
    </Switch> 
  )
};

export default Routes;
