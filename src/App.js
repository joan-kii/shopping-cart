import React from 'react';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Routes from './Routes';

const App = () => {
  return (
    <div>
      <Topbar />
      <main>
        <Routes />
      </main>
      <Footer />
    </div>
  )
};

export default App;
