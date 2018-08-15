import React, {Component} from 'react';

import QuantityForm from './QuantityForm';

import {closeQuantityForm, openQuantityForm, updateQuantity} from './actions';
import {getFoodText, getRecommendationClass} from './logic';

class Portion extends Component {
  _onClick = () => {
    const {dispatch, portion: {foodId}} = this.props;
    dispatch(openQuantityForm(foodId));
  }

  _updateQuantity = quantity => {
    const {dispatch, portion: {foodId, id}} = this.props;
    dispatch(updateQuantity(id, quantity)).then(() => {
      dispatch(closeQuantityForm(foodId));
    });
  }

  _closeForm = () => {
    const {dispatch, portion: {foodId}} = this.props;
    dispatch(closeQuantityForm(foodId));
  }

  render() {
    const {food: {recommendation}, isFetchingIds, isRenderingFormId, portion} = this.props;
    const {foodId, quantity} = portion;
    const isFetching = isFetchingIds.indexOf(foodId) !== -1;
    const isRenderingForm = isRenderingFormId === foodId;
    return (
      <li className={isFetching ? 'disabled' : ''}>
        <div onClick={isFetching || isRenderingForm ? undefined : this._onClick}>
          <span className={getRecommendationClass(recommendation)}>
            {getFoodText(foodId)}
          </span>
          <span>
            {quantity}
            {isRenderingForm && (
              <QuantityForm
                quantity={quantity}
                closeForm={this._closeForm}
                isFetching={isFetching}
                updateQuantity={this._updateQuantity}
              />
            )}
          </span>
        </div>
      </li>
    );
  }
}

export default Portion;
