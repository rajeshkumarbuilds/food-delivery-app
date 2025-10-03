import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = (props) => {
    const { addToCart, cartItem, removeFromCart } = useContext(StoreContext);


    return (
        <div className='food-item ' key={props.item.id}>
            <div className="food-item-img-container">
                <img className='food-images' src={props.item.image} alt="food-images" />
                {!cartItem[props.item._id] ? <img className='add' onClick={() => addToCart(props.item._id)} src={assets.add_icon_white} alt='addToCart' />
                    : <div className='food-item-counter'>
                        <img width={'25px'} onClick={() => removeFromCart(props.item._id)} src={assets.remove_icon_red} alt="removeFromCart" />
                        <p>{cartItem[props.item._id]}</p>
                        <img width={'25px'} onClick={() => addToCart(props.item._id)} src={assets.add_icon_green} alt="addMoreItem" />
                    </div>
                }
            </div>
            <div className="food-info">
                <div className="food-name-cont">
                    <p className='food-name'>{props.item.name}</p>
                    <img src={assets.rating_starts} alt="rating-stars" />
                </div>
                <p className='food-desc'>{props.item.description}</p>
                <p className="food-price">Rs. {props.item.price}</p>
            </div>

        </div>
    )
}

export default FoodItem