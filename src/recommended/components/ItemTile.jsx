import React, { Component } from 'react';
import './ItemTile.css';

import convertPriceStringToNumber from '../../utils/convertPriceStringToNumber';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

class ItemTile extends Component {
    render() {
        const { name, image, price, onAddToCart, id, disabled } = this.props;
        return(
            <div className="tile">
                <img src={image} alt={name} />
                <h4>{capitalizeFirstLetter(name)}</h4>
                <p>${convertPriceStringToNumber(price).toFixed(2)}</p>
                <button onClick={() => onAddToCart({name, image, price, id})} disabled={disabled}>{disabled ? 'Already in Cart' : 'Add to Cart'}</button>
            </div>
        )
    }
}

export default ItemTile;