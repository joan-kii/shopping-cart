import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Catalog from './components/Catalog';
import Topbar from './components/Topbar';
import Footer from './components/Footer';

const Routes = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/catalog' component={Catalog} />
      </Switch> 
      <Footer /> 
    </BrowserRouter>
  )
};

export default Routes;
