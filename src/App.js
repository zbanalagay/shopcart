import React, { Component } from 'react';
import './App.css';
import payload from './api_payload';
import RecommendedList from './recommended/RecommendedList';
import ShoppingCart from './shopping-cart/ShoppingCart';
import convertPriceStringToNumber from './utils/convertPriceStringToNumber'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      shoppingCartItems: [],
      totalPrice: 0.00,
      recommendedList: payload.product_list.sort((a, b) => b.match - a.match)
    };
  }


  onAddToCart = (item) => {
    const { shoppingCartItems, recommendedList } = this.state;
    const shoppingItem = { ...item, quantity: 1 };
    shoppingCartItems.push(shoppingItem);
    
    const shoppingItemPrice = convertPriceStringToNumber(shoppingItem.price);
    const totalPrice = this.state.totalPrice + (shoppingItemPrice * shoppingItem.quantity);
    
    recommendedList[item.id].disabled = true;
    
    this.setState({shoppingCartItems, totalPrice, recommendedList});
  }

  onQuantityChange = (quantity, id) => {
    const { shoppingCartItems } = this.state;
    const item = shoppingCartItems[id];
    if (item.quantity !== quantity) {
      const itemPrice = convertPriceStringToNumber(item.price);
      const newTotalPrice = this.state.totalPrice - (itemPrice * item.quantity) + (itemPrice * quantity);

      item.quantity = quantity;

      this.setState({totalPrice: newTotalPrice, shoppingCartItems})
    }
  }

  onRemoveItemFromCart = (id) => {
    const items = this.state.shoppingCartItems;
    const [ removedItem ]= items.splice(id, 1);
    
    const itemPrice = convertPriceStringToNumber(removedItem.price);
    const newTotalPrice = this.state.totalPrice - (itemPrice * removedItem.quantity);

    this.state.recommendedList[removedItem.id].disabled = false;

    this.setState({shoppingCartItems:items, totalPrice: newTotalPrice})
  }

  render() {
    const {first_name, last_name} = payload;
    
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
          <RecommendedList onAddToCart={this.onAddToCart} productList={this.state.recommendedList}/>
        </div>
      </div>
    );
  }
}

export default App;
