import next from "../assets/playerbuttons/next.png";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import repeat from "../assets/playerbuttons/repeat.png";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";

function Player() {
  const song = useSelector(state => state.playSong.song);
  console.log(song);
  const controll = () => {
    // questo è il solo modo nel quale ho potuto fare il controllo, altrimenti non mi prendeva l'array
    if (song.length > 1) {
    }
  };
  controll();
  // {song.length > 1 ? song.album.cover_medium : ""}
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={{ span: 11, offset: 1 }}>
          <Row className="h-100 justify-content-center align-items-center">
            <Col xs={6} md={4}>
              <div className="d-flex">
                <img src={song.album.cover_medium} alt="" width={50} className="me-2" />
                <div>
                  <p className="text-white my-0">{song.title}</p>
                  <p className="text-white my-0">{song.artist.name}</p>
                </div>
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
