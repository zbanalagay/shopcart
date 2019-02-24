import React, {Component} from 'react';
import './ItemTile.css';

class ItemTile extends Component {
    render(){
        const {name, image, price} = this.props;
        return(
            <div className="tile">
                <img src={image} />
                <h5>{name}</h5>
                <p>{price}</p>
                <button>Add to Cart</button>
            </div>
        )
    }
}

export default ItemTile;