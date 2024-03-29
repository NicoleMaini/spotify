import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import favouriteSongsReducer from "../reducers/favouriteSongsReducer";

const unifiefReducer = combineReducers({
  favouriteSongs: favouriteSongsReducer,
  favourites: favouritesReducer,
});

const store = configureStore({ reducer: unifiefReducer });

export default store; // qui esportiamo il nostro stato in modo che sia accessibile
