const initState = {
  list: [],
};

const choiceReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_COMPANIES":
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default choiceReducer;
