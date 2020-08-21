import React from 'react';

import './index.css';

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />

      <main>
        <Hero />
        <Projects />
      </main>

      <Footer />

    </React.Fragment>
  );
}

export default App;
