import { GET_LIST_SONG } from "../actions";

const initState = {
  list: [],
};

const listSongsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_LIST_SONG:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default listSongsReducer;
