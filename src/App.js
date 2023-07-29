import React from 'react';

import './App.css';
import { Navbar } from './components';
import { AboutUs, FindUs, Footer, Gallery, Header } from './container';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
