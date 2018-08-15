const stateInitial = {
  array: [],
  map: new Map(),
};

export default (state = stateInitial, action) => {
  switch (action.type) {
    case 'FETCH_GET_SUCCESS':
      return {
        array: action.foods,
        map: new Map(action.foods.map(food => [food.id, food])),
      };

    default:
      return state;
  }
};
