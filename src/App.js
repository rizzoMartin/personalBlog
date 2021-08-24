import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.css';

import Header from './components/Header';
import Curriculum from './components/Curriculum';
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header/>
          <Route exact path="/" component={Aboutme}/>
          <Route exact path="/curriculum" component={Curriculum}/>
          <Route exact path="/contact" component={Contact}/>
        </Router>
      </div>
    )
  }
}