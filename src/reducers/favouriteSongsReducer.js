import { GET_FAVOURITE_SONG } from "../actions";

const initState = {
  list: [],
};

const favouriteSongsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_FAVOURITE_SONG:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default favouriteSongsReducer;
