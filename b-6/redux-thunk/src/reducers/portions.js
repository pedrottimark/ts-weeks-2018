export default (state = [], action) => {
  switch (action.type) {
    // Create
    case 'FETCH_POST_SUCCESS':
      return [...state, action.portion];
    // Read
    case 'FETCH_GET_SUCCESS':
      return action.portions;
    // Update
    /*
    case 'FETCH_PUT_SUCCESS':
      return state.map(portion => portion.id === TODO ? TODO : portion);
    */
    // Delete
    /*
    case 'FETCH_DELETE_SUCCESS':
      return state.filter(portion => portion.id !== TODO);
    */

    default:
      return state;
  }
};
