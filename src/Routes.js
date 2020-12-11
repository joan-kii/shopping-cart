import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Catalog from './components/Catalog';
import ProductPage from './components/ProductPage';
import Topbar from './components/Topbar';
import Footer from './components/Footer';

const Routes = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/catalog' component={Catalog} />
        <Route exact 
          path='/catalog/:name'
          render={(routeProps) => (
            <ProductPage 
              name={routeProps.match.params.name} />
          )} />
      </Switch> 
      <Footer /> 
    </BrowserRouter>
  )
};

export default Routes;
