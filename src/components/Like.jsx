import { useEffect, useState } from "react";
import { addSong, removeSong } from "../actions";
import { useDispatch, useSelector } from "react-redux";

function Like({ song }) {
  const dispatch = useDispatch();

  // 1 - recupero l'oggetto della canzone dalle prop e l'array dei preferiti dallo stato globale
  let favorites = useSelector(state => state.favourites.cont);

  // 2 - creao lo stato d'appoggio della mia funzione
  const [isFavorite, setIsFavorite] = useState(false);

  // 3 - creo la funzione per far sapere al player che la "canzone riprodotta" è anche preferita
  const isFavouriteControll = () => {
    favorites.filter(favorite => favorite.id === song.id && setIsFavorite(true));
  };

  // 3.5 - la faccio partire ad ogni oggetto song cambiato
  useEffect(() => {
    isFavouriteControll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [song.id]);

  // 4 - creo la funzione per aggiungere la canzone all'array dei preferiti, e setto lo stato a true, così il player sa che
  // la canzone è contenuta nell'array e riempie il cuoricino
  const handleclickAdd = () => {
    console.log("ADD");
    dispatch(addSong(song));
    setIsFavorite(true);
  };

  // 4.5 stessa cosa, ma rimuove la canzone e svuota il cuoricino
  const handleclickRemove = () => {
    console.log("REM");
    dispatch(removeSong(song));
    setIsFavorite(false);
  };

  return (
    <div className="heart" onClick={isFavorite === true ? handleclickRemove : handleclickAdd}>
      {/* in base al nosto state il ternario o fa una cosa o ne fa un'altra */}
      <i className={isFavorite === true ? "bi bi-heart-fill text-white" : "bi bi-heart text-white"} id="like"></i>
    </div>
  );
}
export default Like;
