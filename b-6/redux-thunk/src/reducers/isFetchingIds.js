const deleteId = (array, foodId) => array.filter(item => item !== foodId);

export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POST_WAITING':
    case 'FETCH_PUT_WAITING':
    case 'FETCH_DELETE_WAITING':
      return [...state, action.foodId];

    case 'FETCH_POST_FAILURE':
    case 'FETCH_PUT_FAILURE':
    case 'FETCH_DELETE_FAILURE':
      return deleteId(state, action.foodId);

    case 'FETCH_POST_SUCCESS':
    case 'FETCH_PUT_SUCCESS':
      return deleteId(state, action.portion.foodId);

    case 'FETCH_DELETE_SUCCESS':
      return deleteId(state, action.foodId);

    default:
      return state;
  }
};
