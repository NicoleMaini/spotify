import { ADD_FAVOURITE } from "../actions";

const initState = {
  isFavourite: false,
};

const isFavouriteReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        isFavourite: action.payload,
      };
    default:
      return state;
  }
};

export default isFavouriteReducer;
