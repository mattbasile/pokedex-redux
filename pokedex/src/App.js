import React, { Component } from 'react';
import './App.css';


import PokedexView from './views/PokedexView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokedexView/>
      </div>
    );
  }
}

export default App;
