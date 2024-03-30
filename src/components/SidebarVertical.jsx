import { Container, Form, Nav, Navbar, Button, InputGroup } from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../actions";

function SidebarVertical() {
  // 1 - creiamo lo stato per andare a settare il nostro parametro di ricerca
  const [searchQuery, setSearchQuery] = useState("");

  // 2 -  recuperiamo il nostro array dei preferiti
  const songs = useSelector(state => state.listSongs.list);
  console.log("song", songs);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 3 - creiamo la funzione che all'onclick del form, previene il suo invio, setta lo stato col nostro parametro di ricerca
  // e ne crea l'indirizzo
  const handleclick = event => {
    event.preventDefault();
    // recuperiamo la fetch dalle action
    dispatch(getSongs(searchQuery));
    navigate("/search/" + searchQuery);
  };

  return (
    <Nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
      <Container className="flex-column align-items-start">
        {/* colleghiamo l'indirizzo della home */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Spotify Logo" width="131" height="40" />
        </Link>
        <Navbar className="navbar-collapse" id="navbarNavAltMarkup">
          <Nav className="flex-column">
            <Nav.Item>
              <Link to="/" className="nav-item nav-link d-flex align-items-center">
                <i className="bi bi-house-door-fill"></i>&nbsp; Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              {/* colleghiamo l'indirizzo della library */}
              <Link to="/library" className="nav-item nav-link d-flex align-items-center">
                <i className="bi bi-book-fill"></i>&nbsp; Your Library
              </Link>
            </Nav.Item>
            <Nav.Item>
              {/*qui si avvia quando viene inviato il form */}
              <Form className="input-group mt-3" onSubmit={handleclick}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    id="searchField"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                  <Button
                    variant="outline-secondary"
                    className="btn-sm h-100"
                    type="submit"
                    // si avvia quando viene premuto il bottone
                    onClick={e => {
                      handleclick(e);
                      setSearchQuery("");
                    }}
                  >
                    GO
                  </Button>
                </InputGroup>
              </Form>
            </Nav.Item>
          </Nav>
        </Navbar>
      </Container>
      <Container className="flex-column nav-btn">
        <Button className="signup-btn" type="button">
          Sign Up
        </Button>
        <Button className="login-btn" type="button">
          Login
        </Button>
        <Nav.Link>Cookie Policy | Privacy</Nav.Link>
      </Container>
    </Nav>
  );
}

export default SidebarVertical;
