import React, { Component } from 'react';
import Base from './components/Base';
import ScrollWindow from './components/ScrollWindow';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollWindow />
      </div>
    );
  }
}

export default App;
