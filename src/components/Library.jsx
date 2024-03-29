import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeSong } from "../actions";

function Library() {
  // dobbiammo recuperare l'array delle aziende:
  const listSong = useSelector(state => state.favouriteSongs.list);
  console.log(listSong);
  // creaimo la funzione per dispacciare le inforamzioni
  const dispatch = useDispatch();
  const hendleClick = () => {
    // risettiamo lo stato con canzone selezionata
    dispatch(removeSong()); //i
  };

  return (
    <Col md={10}>
      <h2 className="sectionResults">Your Library</h2>
      <Row xs={2} md={3} lg={4} className="imgLinks py-3">
        <Link to="/">
          <Button variant="outline-secondary p-2">Go Back</Button>
        </Link>
      </Row>
    </Col>
  );
}

export default Library;
