import React, { Component } from 'react';
import './App.css';
import payload from './api_payload';
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

  onQuantityChange = (quantity, id) => {
    const item = this.state.shoppingCartItems[id];
    if (item.quantity !== quantity){
      const itemPrice = Number(item.price.replace(/[^0-9\.]+/g,""));
      const newTotalPrice = (this.state.totalPrice - itemPrice * item.quantity) + (itemPrice * quantity)
      item.quantity = quantity;
      this.setState({totalPrice: newTotalPrice})
    }
  }

  onRemoveItemFromCart = (id) => {
    const items = this.state.shoppingCartItems
    const [removedItem]= items.splice(id, 1)
    const itemPrice = Number(removedItem.price.replace(/[^0-9\.]+/g,""));
    const newTotalPrice = this.state.totalPrice - (itemPrice * removedItem.quantity);
    this.setState({shoppingCartItems:items, totalPrice: newTotalPrice})
  }

  render() {
    const {product_list, first_name, last_name} = payload
    return (
      <div className="App">
        <header>
            <h1>ShopCart</h1>
        </header>
        <div className="greeting-bar">
            <h3>Hello {first_name} {last_name}! </h3>
          </div>
        <div className="overview">
          <ShoppingCart items={this.state.shoppingCartItems} totalPrice={this.state.totalPrice} onQuantityChange={this.onQuantityChange} onRemoveItemFromCart={this.onRemoveItemFromCart}/>
          <RecommendedList onAddToCart={this.onAddToCart} productList={product_list}/>
        </div>
      </div>
    );
  }
}

export default App;
