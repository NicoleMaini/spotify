import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import listSongsReducer from "../reducers/listSongsReducer";
import playSongReducer from "../reducers/playSongReducer";

const unifiefReducer = combineReducers({
  listSongs: listSongsReducer,
  favourites: favouritesReducer, // array prefe
  playSong: playSongReducer,
});

const store = configureStore({ reducer: unifiefReducer });

export default store; // qui esportiamo il nostro stato in modo che sia accessibile
