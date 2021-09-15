import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import {List, Article, HomePage} from './pages';
import {Header, Section, Menu} from './components';

function App() {



  return (
      <div className="App">
        <Router>
          <Header/>
          <Section>
            <Menu/>
            <Switch>
              <Route path='/' exact component={HomePage}/>
              <Route path='/list' exact component={List}/>
              <Route path='/article' exact component={Article}/>
            </Switch>
          </Section>
        </Router>
      </div>
  );
}

export default App;
