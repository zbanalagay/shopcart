import React, {Component} from 'react';

// Temp until i do on button clicks
import payload from '../api_payload'; 
import ListItem from './components/ListItem';

class ShoppingCart extends Component {
    render(){
        const {product_list} = payload;
        return(
        <div className="container">
            <div className="container-header">
                <h4>Shopping Cart</h4>
            </div>
            <div>
                {product_list.map((item, index) => (
                    <ListItem name={item.name} price={item.price} image={item.image} />
                ))}
            </div>
        </div>);
    }
}

export default ShoppingCart;