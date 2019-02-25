import React, {Component} from 'react';

// Temp until i do on button clicks
import payload from '../api_payload'; 
import ListItem from './components/ListItem';

class ShoppingCart extends Component {

    render(){
        const {items, totalPrice, onQuantityChange, onRemoveItemFromCart} = this.props;

        return(
            <div className="container">
            <div className="container-header">
                <h4>Shopping Cart</h4>
            </div>
            {items.length > 0 ? (
                <>
                <div>
                {items.map((item, index) => (
                    <ListItem name={item.name} price={item.price} image={item.image} quantity={item.quantity} onQuantityChange={onQuantityChange} id={index} onRemoveItemFromCart={onRemoveItemFromCart}/>
                ))}
            </div>
            <div className="container-footer">
                <h6>Total:</h6> <p>{totalPrice}</p>
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