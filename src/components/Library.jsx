import { Alert, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeSong } from "../actions";
import AlbumCard from "./AlbumCard";
import { useEffect, useState } from "react";

function Library() {
  const [songItem, setSongItem] = useState(null);
  const listSong = useSelector(state => state.favourites.cont);
  console.log("arr", listSong);

  const controll = () => {
    if (listSong.length !== 0) {
      setSongItem(listSong);
    }
  };

  useEffect(() => {
    controll();
  }, []);

  const dispatch = useDispatch();

  return (
    <>
      {songItem === null && (
        <Alert variant="warning" className="w-75 mt-5">
          Non hai aggiunto nessuna canzone hai preferiti
        </Alert>
      )}
      {songItem !== null && (
        <Col md={10}>
          <h2 className="sectionResults">Your Library</h2>
          <Row xs={2} md={3} lg={4} className="imgLinks py-3">
            {songItem.map((song, i) => {
              return (
                <div>
                  <AlbumCard key={i} album={song} />{" "}
                  <div
                    className="heart text-center mb-4"
                    onClick={() => {
                      dispatch(removeSong(song));
                    }}
                  >
                    <i className="bi bi-heart-fill text-white"></i>
                  </div>
                </div>
              );
            })}
          </Row>
        </Col>
      )}
    </>
  );
}

export default Library;
