import React, { Component } from 'react';
import './App.css';
import RecommendedList from './recommended/RecommendedList';
import ShoppingCart from './shopping-cart/ShoppingCart';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      shoppingCartItems: [],
      totalPrice: 0
    }
  }
  onAddToCart = (item) => {
    const {shoppingCartItems} = this.state
    const shoppingItem = {...item, quantity: 1}
    shoppingCartItems.push(shoppingItem);
    const shoppingItemPrice = Number(shoppingItem.price.replace(/[^0-9\.]+/g,""));
    this.setState({shoppingCartItems, totalPrice: this.state.totalPrice + (shoppingItemPrice * shoppingItem.quantity)})
  }

  onQuantityChange = (quantity, id, price) => {
    const item = this.state.shoppingCartItems[id];
    if (item.quantity !== quantity){
      const itemPrice = Number(item.price.replace(/[^0-9\.]+/g,""));
      const newTotalPrice = (this.state.totalPrice - itemPrice * item.quantity) + (itemPrice * quantity)
      item.quantity = quantity;
      this.setState({totalPrice: newTotalPrice})
    }
    
  }

  render() {
    return (
      <div className="App">
        hello world
        <div className="overview">
          <ShoppingCart items={this.state.shoppingCartItems} totalPrice={this.state.totalPrice} onQuantityChange={this.onQuantityChange}/>
          <RecommendedList onAddToCart={this.onAddToCart}/>
        </div>
       
        
      </div>
    );
  }
}

export default App;
