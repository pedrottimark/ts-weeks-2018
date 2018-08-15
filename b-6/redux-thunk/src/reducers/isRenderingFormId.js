const stateInitial = '';

export default (state = stateInitial, action) => {
  switch (action.type) {
    case 'OPEN_QUANTITY_FORM':
      return action.foodId;

    case 'CLOSE_QUANTITY_FORM':
      return stateInitial;

    default:
      return state;
  }
};
