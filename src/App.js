import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import './index.css';

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import ExternalRedirect from './components/ExternalRedirect/ExternalRedirect';

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
      <Route path='/digitalocean' render={() => (<ExternalRedirect to='https://m.do.co/c/13599454ff81' name='DigitalOcean' />)} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
