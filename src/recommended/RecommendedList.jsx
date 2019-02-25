import React, {Component} from 'react';
import './RecommendedList.css';

import ItemTile from './components/ItemTile';

class RecommendedList extends Component {

    render() {
        const {productList} = this.props;

        return(
            <div className="container">
                <div className="container-header">
                    <h4>Items you might like</h4>
                </div>
                <div className="container-body">
                    {productList.length > 0 ? (
                        <div className="recommend-items">
                            {productList.map((item, index) => (
                                <ItemTile key={index} name={item.name} price={item.price} image={item.image} onAddToCart={this.props.onAddToCart} id={index} disabled={item.disabled}/>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <p>You have no recommend items.</p> 
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default RecommendedList;