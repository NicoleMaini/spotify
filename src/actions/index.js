export const ADD_LIST = "ADD_LIST";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const GET_FAVOURITE_SONG = "GET_FAVOURITE_SONG";

// scriviamo le action creator ovvero le azioni che vanno inserite in dispatch

export const addSong = obj => {
  return {
    type: ADD_LIST,
    payload: obj,
  };
};

export const removeSong = i => {
  return {
    type: REMOVE_ITEM,
    payload: i,
  };
};

// creiamo una fetch come actione creator

export const getCompaniesWork = baseEndpoint => {
  return (dispatch, getState) => {
    // fare la fetch
    fetch(baseEndpoint)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel recupero dati");
        }
      })
      .then(data => {
        // console.log(getState()); serve a vedere cosa è presente negli stati
        // e dispatcare l'array
        dispatch({
          type: GET_FAVOURITE_SONG,
          payload: data,
        });
      })
      .catch(error => console.log(error));
  };
};
