export default (state = '', action) => {
  switch (action.type) {
    case 'FETCH_POST_WAITING':
    case 'FETCH_PUT_WAITING':
    case 'FETCH_DELETE_WAITING':
      return '';

    case 'CATCH_ERROR':
    case 'FETCH_GET_FAILURE':
    case 'FETCH_POST_FAILURE':
    case 'FETCH_PUT_FAILURE':
    case 'FETCH_DELETE_FAILURE':
      return action.message;

    case 'FETCH_POST_SUCCESS':
    case 'FETCH_PUT_SUCCESS':
      return '';

    default:
      return state;
  }
};
