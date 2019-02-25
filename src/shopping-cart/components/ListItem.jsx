import React, { Component } from 'react';
import './ListItem.css';

import convertPriceStringToNumber from '../../utils/convertPriceStringToNumber';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantityValue: this.props.quantity || 1,
            isUpdateLinkVisible: false,
            previousQuantityValue: this.props.quantity || 1
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.quantity !== prevProps.quantity) {
            this.setState({
                quantityValue: this.props.quantity
            })
        }
    }

    onChange = (e) => {
        let isUpdateLinkVisible = this.state.isUpdateLinkVisible;
        if (e.target.value !== '' && !this.state.isUpdateLinkVisible) {
            isUpdateLinkVisible = true;
        } else if (e.target.value === '' && this.state.isUpdateLinkVisible){
            isUpdateLinkVisible = false;
        }
        this.setState({
            quantityValue: e.target.value,
            isUpdateLinkVisible
        });
    }

    onBlur = () => {
        if (this.state.quantityValue === ''){
            this.setState({
                quantityValue: this.state.previousQuantityValue
            })
        }
    }

    updateQuantity = (e) => {
        e.preventDefault();
        this.props.onQuantityChange(this.state.quantityValue, this.props.id);
        this.setState({
            isUpdateLinkVisible: false,
            previousQuantityValue: this.state.quantityValue
        });
    }


    removeItem = () => {
        this.props.onRemoveItemFromCart(this.props.id);
    }

    render() {
        const { image, name, price } = this.props;

        return(
            <div className="list-item">
                <img src={image} className="cart-img" alt={name}/>
                <div className="cart-info">
                    <h4>{capitalizeFirstLetter(name)}</h4>
                    <p>${convertPriceStringToNumber(price).toFixed(2)}</p>
                </div> 
                <div className="cart-user-input">
                    <form onSubmit={this.updateQuantity}>
                        <div className="update-quantity">
                            <label>Quantity: 
                                <input type="number" min={1} max={100} value={this.state.quantityValue} onChange={this.onChange} onBlur={this.onBlur}/>
                            </label>
                            {this.state.isUpdateLinkVisible ? (<button> Update </button>): ''}
                        </div>
                    </form>
                    <button className="link-button" onClick={this.removeItem}>Remove Item</button>
                </div>
            </div>
        )
    }
}

export default ListItem;