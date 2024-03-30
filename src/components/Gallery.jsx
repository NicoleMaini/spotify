import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import AlbumCard from "./AlbumCard";

function Gallery(props) {
  const [albums, setAlbums] = useState([]);
  // creiamo la fetch che recupera dai componenti i parametri che le servono per avviarsi
  const forSection = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + props.artist, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      });
      if (response.ok) {
        let obj = await response.json();
        console.log(obj.data);
        // statiamo lo stato nello stato della funzione
        setAlbums(obj.data);
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    // facciamo partire la fetch solo se la prop passata è definita
    if (props.artist !== undefined) {
      forSection();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.artist]);

  return (
    // ritorniamo la card
    <Col md={10}>
      <h2 className="sectionResults">{props.genre}</h2>
      <Row xs={2} md={3} lg={4} className="imgLinks py-3">
        {albums.slice(0, props.n).map((album, i) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </Row>
    </Col>
  );
}

export default Gallery;
