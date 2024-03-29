import { GET_PLAY_SONG } from "../actions";

const initState = {
  song: [],
};

const playSongReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PLAY_SONG:
      return {
        song: action.payload,
      };
    default:
      return state;
  }
};

export default playSongReducer;
