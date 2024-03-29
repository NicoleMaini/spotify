import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";

const unifiefReducer = combineReducers({
  favourites: favouritesReducer,
  //  playSong:
});

const store = configureStore({ reducer: unifiefReducer });

export default store; // qui esportiamo il nostro stato in modo che sia accessibile
