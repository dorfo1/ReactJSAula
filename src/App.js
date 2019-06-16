import React from 'react';
import './App.css';
import Header from './components/Header/index'
import { BrowserRouter as Router } from 'react-router-dom'

import './flexboxgrid.min.css'
import Routes from './routes';

class App extends React.Component {
  render() {
    return (
      <div className="mdl-layout">
        <Router>
          <Header />
          <Routes />
        </Router>
      </div>
    );

  }
}

export default App;
