import React, { Component } from 'react';
import './App.css';
import RecommendedList from './recommended/RecommendedList';
import ShoppingCart from './shopping-cart/ShoppingCart';

class App extends Component {
  render() {
    return (
      <div className="App">
        hello world
        <div className="overview">
          <ShoppingCart/>
          <RecommendedList />
        </div>
       
        
      </div>
    );
  }
}

export default App;
