import React, {Component} from 'react';
import './ItemTile.css';

class ItemTile extends Component {
    render() {
        const { name, image, price, onAddToCart, id, disabled } = this.props;
        return(
            <div className="tile">
                <img src={image} />
                <h5>{name}</h5>
                <p>{price}</p>
                <button onClick={() => onAddToCart({name, image, price, id})} disabled={disabled}>{disabled ? 'Already In Cart' : 'Add to Cart'}</button>
            </div>
        )
    }
}

export default ItemTile;