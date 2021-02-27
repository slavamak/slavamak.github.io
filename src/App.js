import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import './index.css';

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <main>
          <Hero />
          <Projects />
        </main>
        <Footer />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
