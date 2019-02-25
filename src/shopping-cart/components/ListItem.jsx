import React, {Component} from 'react';
import './ListItem.css';

class ListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            quantityValue: this.props.quantity || 1
        }
    }

    onChange = (e)=> {
        this.setState({quantityValue: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onQuantityChange(this.state.quantityValue, this.props.id)
    }

    removeItem = () => {
        this.props.onRemoveItemFromCart(this.props.id);
    }


    render(){
        const {image, name, price, quantity} = this.props;
        return(
            <div class="list-item">
            <img src={image} class="cart-img" alt={`An image of ${name}`}/>
            <div class="cart-info">
                <h5>{name}</h5>
                <p>{price}</p>
            </div> 
            <div class="cart-user-input">
                <form onSubmit={this.handleSubmit}>
                <label>Quantity
                    <input type="number" min={1} max={100} value={this.state.quantityValue} onChange={this.onChange}/>
                </label>
                <button> Update </button>
                </form>
                <a onClick={this.removeItem}>Remove Item</a>
            </div>
        </div>
        )
    }
}

export default ListItem;