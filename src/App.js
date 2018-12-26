import React, { Component } from 'react';
import ProductListContainer from './container/ProductListContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h5>Mercadolibre</h5>
        </header>

          <div className="main">
            <ProductListContainer/>
          </div>
      </div>
    );
  }
}

export default App;
