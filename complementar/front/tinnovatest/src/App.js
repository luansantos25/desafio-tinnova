import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar';
import Atv1 from './Atv1';
import Atv2 from './Atv2';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="container my-4">
          <Atv1 />
          <hr></hr>
          <Atv2 />
        </div>
      </div>
    );
  }
}

export default App;
