// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />
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

function App() {
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
                <Route
                  path="/"
                  element={
                    <>
                      <Gallery genre="Rock Classic" artist="queen" />
                      <Gallery genre="Pop Culture" artist="katyperry" />
                      <Gallery genre="#HipHop" artist="eminem" />
                    </>
                  }
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
