import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import SidebarVertical from "./components/SidebarVertical";
import { Col, Row } from "react-bootstrap";
import Upbar from "./components/Upbar";
import Gallery from "./components/Gallery";
import Player from "./components/Player";
import Library from "./components/Library";
import { useSelector } from "react-redux";
import { useState } from "react";

function App() {
  // 1 - settiamo lo stato per il nostro parametro di ricerca

  const [searchQuery, setSearchQuery] = useState("madonna");

  // 2 - recuperiamo l'array delle canzoni fetchata all'invio del form e salvata nello stato globale listSongs
  const search = useSelector(state => state.listSongs.list);
  // console.log("SERCH", search);

  // 3 - creaimo una funzione che setta il parametro solo nel caso la lunghezza dell'array sia più grande di uno e
  // il parametro attuale di ricerca sia diverso dal nome del'artista inserito
  const controll = () => {
    // questo è il solo modo nel quale ho potuto fare il controllo, altrimenti non mi prendeva l'array
    if (search.length > 1 && searchQuery !== search[0].artist.name) {
      setSearchQuery(search[0].artist.name);
    }
  };
  controll();

  return (
    <BrowserRouter>
      <Container fluid className="p-0 m-0">
        <Row>
          <Col md={3}>
            <SidebarVertical />
          </Col>
          <Col md={9}>
            <Container className="p-0 mainPage mb-7rem">
              <Upbar />
              <Routes>
                <Route path="/library" element={<Library />}></Route>
                <Route
                  path="/"
                  element={
                    <>
                      <Gallery genre="Rock Classic" artist="queen" n={4} />
                      <Gallery genre="Pop Culture" artist="katyperry" n={4} />
                      <Gallery genre="#HipHop" artist="eminem" n={4} />
                    </>
                  }
                ></Route>
                <Route
                  path="/search/:searchQuery"
                  element={<Gallery genre="Search Results" artist={searchQuery} n={search.length} />}
                ></Route>
              </Routes>
            </Container>
            <Player />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
