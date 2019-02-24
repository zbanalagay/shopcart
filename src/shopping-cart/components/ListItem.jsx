import React, {Component} from 'react';
import './ListItem.css';

class ListItem extends Component {
    render(){
        const {image, name, price} = this.props;
        return(
            <div class="list-item">
            <img src={image} class="cart-img" alt={`An image of ${name}`}/>
            <div class="cart-info">
                <h5>{name}</h5>
                <p>{price}</p>
            </div> 
            <div>
                <label>Quantity
                    <input type="number" min={1} max={100} value={1}/>
                </label>
            </div>
        </div>
        )
    }
}

export default ListItem;