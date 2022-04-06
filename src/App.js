import React from 'react';
import './App.css';
import Count from './features/count/Count';
import Product from './features/product/Product';


function App() {
  return (
    <div className="App">
      <Count/>
      <hr/>
      <h2>Product</h2>
      <Product/>
    </div>
  );
}

export default App;
