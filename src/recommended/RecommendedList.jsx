import React, {Component} from 'react';
import './RecommendedList.css';
import ItemTile from './components/ItemTile';

import payload from '../api_payload';

class RecommendedList extends Component {

    render(){
        const {product_list} = payload;
        return(
            <div className="container">
                <div className="container-header">
                    <h4>Items you might like</h4>
                </div>
                <div className="container-body">
                {product_list.length > 0 ? (<div className="recommend-items">{product_list.map((item, index) => (
                        <ItemTile key={index} name={item.name} price={item.price} image={item.image} onAddToCart={this.props.onAddToCart}/>
                        ))}</div>): (<div><p>You have no recommend items.</p> </div>)}
                </div>
            </div>
        )
    }
}

export default RecommendedList;