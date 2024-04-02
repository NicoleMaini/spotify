import next from "../assets/playerbuttons/next.png";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import repeat from "../assets/playerbuttons/repeat.png";
import Like from "./Like";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function Player() {
  // // recupero l'oggetto della canzone e l'array dei preferiti dallo stato globale
  let song = useSelector(state => state.playSong.song);
  console.log("Id Inviato da player", song.id);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={{ span: 11, offset: 1 }}>
          <Row className="h-100 justify-content-center align-items-center">
            <Col xs={6} md={4}>
              <div className="d-flex">
                <img
                  // controllo sulla lunghezza dell'array
                  src={song.length !== 0 ? song.album.cover_medium : ""}
                  alt=""
                  width={50}
                  height={50}
                  className="me-2"
                />
                <div className="me-5">
                  <p className="text-white my-0">{song.length !== 0 ? song.title : "Title"}</p>
                  <p className="text-white my-0">{song.length !== 0 ? song.artist.name : "Artist"}</p>
                </div>
                <Like song={song} _id={song.id} />
              </div>
            </Col>
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Player;
