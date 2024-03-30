import { Alert, Col, Row } from "react-bootstrap";
import AlbumCard from "./AlbumCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Library() {
  // 1 - recuperiamo l'arrey dei prefe dallo stato globale
  const listSong = useSelector(state => state.favourites.cont);
  console.log("PREF", listSong);

  // 2 - creiamo lo stato da poter utilizzare poi e lo settiamo a null
  const [songItem, setSongItem] = useState(null);

  // 3 - poi controlliamo che la sua lunghezza sia diversa da zero, e a quel punto settiamo lo stato della funzione
  const controll = () => {
    if (listSong.length !== 0) {
      setSongItem(listSong);
    }
  };
  // 4 - facciamo partire il controllo al caricamento della pagina, altrmenti va in errore
  useEffect(() => {
    controll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* controllo 1 - se è null compare l'alert */}
      {songItem === null && (
        <Alert variant="warning" className="w-75 mt-5">
          Non hai aggiunto nessuna canzone hai preferiti
        </Alert>
      )}
      {/* controllo 2 - se NON è null allora carica la card */}
      {songItem !== null && (
        <Col md={10}>
          <h2 className="sectionResults">Your Library</h2>
          <Row xs={2} md={3} lg={4} className="imgLinks py-3">
            {songItem.map((song, i) => {
              return <AlbumCard key={i} album={song} />;
            })}
          </Row>
        </Col>
      )}
    </>
  );
}

export default Library;
