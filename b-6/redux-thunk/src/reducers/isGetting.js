export default (state = false, action) => {
  switch (action.type) {
    case 'FETCH_GET_WAITING':
      return true;

    case 'FETCH_GET_FAILURE':
    case 'FETCH_GET_SUCCESS':
      return false;

    default:
      return state;
  }
};
