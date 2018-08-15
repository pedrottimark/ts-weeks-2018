import React from 'react';

import {getFoodText, getRecommendationClass} from './logic';

const Food = ({addFood, food: {id, recommendation}, isDisabled}) => (
  <li className={isDisabled ? 'disabled' : ''}>
    <button
      className={getRecommendationClass(recommendation)}
      onClick={isDisabled ? undefined : addFood.bind(null, id)}
    >
      {getFoodText(id)}
    </button>
  </li>
);

export default Food;
