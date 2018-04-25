import React, { Component } from 'react';
import '../index.css';
import Parks from './Parks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search Parks</h1>
        </header>
        <Parks />
      </div>
    );
  }
}

export default App;
