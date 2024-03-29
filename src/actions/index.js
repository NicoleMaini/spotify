export const ADD_LIST = "ADD_LIST";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const GET_FAVOURITE_SONG = "GET_FAVOURITE_SONG";
export const GET_PLAY_SONG = "GET_PLAY_SONG";

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

export const playSong = obj => {
  return { type: GET_PLAY_SONG, payload: obj };
};

// creiamo una fetch come actione creator

export const getSong = searchQuery => {
  return (dispatch, getState) => {
    // fare la fetch
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchQuery, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
      },
    })
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
        console.log(data.data);
        dispatch({
          type: GET_FAVOURITE_SONG,
          payload: data.data,
        });
        console.log("stati", getState());
      })
      .catch(error => console.log(error));
  };
};
