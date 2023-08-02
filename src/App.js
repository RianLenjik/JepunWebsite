import React from 'react';

import './App.css';
import { Navbar } from './components';
import { AboutUs, Footer, Gallery, Header } from './container';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Gallery />
    <Footer />
  </div>
);

export default App;
