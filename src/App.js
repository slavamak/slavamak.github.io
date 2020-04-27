import React from 'react';

import './index.css';

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';

function App() {
  return (
    <React.Fragment>
      <Header />

      <main>
        <Hero />
      </main>

    </React.Fragment>
  );
}

export default App;
