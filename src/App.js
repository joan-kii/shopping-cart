import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ItemsContextProvider from './assets/ItemsList';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Routes from './Routes';


const App = () => {

  return (
    <BrowserRouter>
      <ItemsContextProvider>
        <Topbar />
        <main>
          <Routes />
        </main>
      </ItemsContextProvider>
      <Footer />
    </BrowserRouter>
  )
};

export default App;
