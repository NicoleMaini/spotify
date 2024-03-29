import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import favouriteSongsReducer from "../reducers/favouriteSongsReducer";
import playSongReducer from "../reducers/playSongReducer";

const unifiefReducer = combineReducers({
  favouriteSongs: favouriteSongsReducer,
  favourites: favouritesReducer,
  playSong: playSongReducer,
});

const store = configureStore({ reducer: unifiefReducer });

export default store; // qui esportiamo il nostro stato in modo che sia accessibile
