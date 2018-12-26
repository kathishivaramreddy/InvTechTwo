import React, { Component } from 'react';
import ProductListContainer from './container/ProductListContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>

          <div>
            <ProductListContainer/>
          </div>
      </div>
    );
  }
}

export default App;
