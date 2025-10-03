import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div id='food-display' className='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item) => (
          (category === "All" || category === item.category) && (
            <FoodItem key={item._id} item={item} />
          )
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
