import React from 'react';
import Header from './assets/components/Header';
import Body from './assets/components/Body';
import Footer from './assets/components/Footer';
import './App.css';
import './assets/components/animation';

function App() {
  return (
    <div>
      <div class="bg-photo animation"></div>
      
      <div class="over">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
