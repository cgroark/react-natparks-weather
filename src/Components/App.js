import React, { Component } from 'react';
import '../index.css';
import Parks from './Parks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Your National Parks</h1>
          <p>Search for National Parks. Get weather forecasts and park details. Save to your comparison list.</p>
        </header>
        <Parks />
      </div>
    );
  }
}

export default App;
