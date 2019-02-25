import React, { Component } from 'react';

import ListItem from './components/ListItem';

class ShoppingCart extends Component {

    render() {
        const { items, totalPrice, onQuantityChange, onRemoveItemFromCart } = this.props;

        return(
            <div className="container">
            <div className="container-header">
                <h3>Shopping Cart</h3>
            </div>
            {items.length > 0 ? (
                <>
                    <div>
                        {items.map((item, index) => (
                            <ListItem key={index} name={item.name} price={item.price} image={item.image} quantity={item.quantity} onQuantityChange={onQuantityChange} id={index} onRemoveItemFromCart={onRemoveItemFromCart}/>
                        ))}
                    </div>
                    <div className="container-footer">
                        <div className="total-price">
                            <h6>Total:</h6>
                            <p>${totalPrice.toFixed(2)}</p>
                        </div>
                    </div>
                </>
            ): (
                <div className="container-body">
                    <p>There are no items currently in your Cart</p>
                </div>
            )}
        </div>);
    }
}

export default ShoppingCart;