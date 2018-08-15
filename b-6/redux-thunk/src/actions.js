import {
  fetchDeletePortion,
  fetchGetFoods,
  fetchGetPortions,
  fetchPostPortion,
  fetchPutPortion,
} from './fetch';

export const getFoodsPortions = () => dispatch => {
  dispatch({
    type: 'FETCH_GET_WAITING',
  })
  return Promise.all([fetchGetFoods(), fetchGetPortions()]).then(
    ([foods, portions]) => {
      dispatch({
        type: 'FETCH_GET_SUCCESS',
        foods,
        portions,
      });
    },
    error => {
      dispatch({
        type: 'FETCH_GET_FAILURE',
        message: error.message,
      });
    }
  );
};

const putPortion = (portion, dispatch) => {
  const {foodId} = portion;
  dispatch({
    type: 'FETCH_PUT_WAITING',
    foodId,
  });
  return fetchPutPortion(portion).then(
    () => {
      dispatch({
        type: 'FETCH_PUT_SUCCESS',
        portion,
      });
    },
    error => {
      dispatch({
        type: 'FETCH_PUT_FAILURE',
        foodId,
        message: error.message,
      });
    }
  );
};

export const addFood = foodId => (dispatch, getState) => {
  const {portions} = getState();
  const portionPrev = portions.find(portion => portion.foodId === foodId);
  if (portionPrev === undefined) {
    dispatch({
      type: 'FETCH_POST_WAITING',
      foodId,
    });
    return fetchPostPortion({foodId, quantity: 1}).then(
      portion => {
        dispatch({
          type: 'FETCH_POST_SUCCESS',
          portion,
        });
      },
      error => {
        // TODO
      }
    );
  } else {
    const portion = {
      ...portionPrev,
      quantity: portionPrev.quantity + 1,
    };
    return putPortion(portion, dispatch);
  }
};

export const updateQuantity = (portionId, quantity) => (dispatch, getState) => {
  const portionPrev = getState().portions.find(portion => portion.id === portionId);
  const {foodId} = portionPrev;
  if (quantity === 0) {
    dispatch({
      type: 'FETCH_DELETE_WAITING',
      foodId,
    });
    return fetchDeletePortion(portionId).then(
      () => {
        dispatch({
          type: 'FETCH_DELETE_SUCCESS',
          foodId,
          portionId,
        });
      },
      error => {
        // TODO
      }
    )
  } else {
    const portion = {
      ...portionPrev,
      quantity,
    };
    return putPortion(portion, dispatch);
  }
};

export const closeQuantityForm = foodId => ({
  type: 'CLOSE_QUANTITY_FORM',
  foodId,
});

export const openQuantityForm = foodId => ({
  type: 'OPEN_QUANTITY_FORM',
  foodId,
});

export const catchError = error => ({
  type: 'CATCH_ERROR',
  message: error.message,
});
