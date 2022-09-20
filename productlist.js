import React, {Component} from 'react';

import Food from '../product/fooditem';

import './productlist.css';

class ProductList extends Component{
    
    render(){
        return(
            <div className='productlist'>
            {
            
            this.props.foods.map((food) => {
                return <Food key={Math.random()} item={food.item} price={food.price} offer={food.offer} img={food.image}></Food>
            })
        }
        </div>
        )
    }
}


export default ProductList;