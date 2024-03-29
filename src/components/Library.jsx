import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeSong } from "../actions";
import AlbumCard from "./AlbumCard";

function Library() {
  const listSong = useSelector(state => state.favourites.cont);
  console.log("listsong", listSong);
  const dispatch = useDispatch();
  const hendleClick = () => {
    // risettiamo lo stato con canzone selezionata
    dispatch(removeSong()); //i
  };

  return (
    <Col md={10}>
      <h2 className="sectionResults">Your Library</h2>
      <Row xs={2} md={3} lg={4} className="imgLinks py-3">
        {listSong.map((song, i) => {
          return <AlbumCard key={i} album={song} onClick={hendleClick} />;
        })}
      </Row>
    </Col>
  );
}

export default Library;
