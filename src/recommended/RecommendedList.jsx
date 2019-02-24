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
                
                <div className="recommend-items">
                    {product_list.map((item, index) => (
                        <ItemTile key={index} name={item.name} price={item.price} image={item.image} />
                        ))}
                </div>
            </div>
        )
    }
}

export default RecommendedList;