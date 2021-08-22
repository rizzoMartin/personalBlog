import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './styles/App.css';

import Curriculum from './components/Curriculum';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/curriculum">Curriculum</Link>

          <h1>Martín Rizzo Lozano</h1>
          <div className="Menu">
            
          </div>


          <Route exact path="/" render={() => {
            return (
              <div>
                <h2>Página de inicio</h2>
              </div>
            )
          }}/>
          
          <Route exact path="/curriculum" component={Curriculum}/>
        </Router>
      </div>
    )
  }
}