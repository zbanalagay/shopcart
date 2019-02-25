import React, {Component} from 'react';
import './ListItem.css';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantityValue: this.props.quantity || 1,
            isUpdateLinkVisible: false
        };
    }

    onChange = (e) => {
        let isUpdateLinkVisible = false;
        if (e.target.value !== '' && !this.state.isUpdateLinkVisible) {
            isUpdateLinkVisible = true;
        }
        this.setState({
            quantityValue: e.target.value,
            isUpdateLinkVisible
        });
    }

    updateQuantity = () => {
        this.props.onQuantityChange(this.state.quantityValue, this.props.id);
        this.setState({
            isUpdateLinkVisible: false
        });
    }

    removeItem = () => {
        this.props.onRemoveItemFromCart(this.props.id);
    }


    render() {
        const {image, name, price } = this.props;

        return(
            <div class="list-item">
                <img src={image} class="cart-img" alt={`An image of ${name}`}/>
                <div class="cart-info">
                    <h5>{name}</h5>
                    <p>{price}</p>
                </div> 
                <div class="cart-user-input">
                    <label>Quantity
                        <input type="number" min={1} max={100} value={this.state.quantityValue} onChange={this.onChange}/>
                    </label>
                    {this.state.isUpdateLinkVisible ? (<a onClick={this.updateQuantity}> Update </a>): ''}
                    <a onClick={this.removeItem}>Remove Item</a>
                </div>
            </div>
        )
    }
}

export default ListItem;