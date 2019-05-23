import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AppLayout from './Layout/Layout';

import './App.css';


class App extends React.Component {
  render() {
    return (
      <Router className="App">
        <AppLayout/>
      </Router>
    );
  }
}

export default App;
