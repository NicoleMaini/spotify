import { Container, Form, Nav, Navbar, Button, InputGroup } from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSong } from "../actions";

function SidebarVertical() {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const songs = useSelector(state => state.favouriteSongs.list);
  console.log("song", songs);

  const search = event => {
    event.preventDefault();
    dispatch(getSong(searchQuery));
    navigate("/search/" + searchQuery);

    // try {
    //   let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchQuery, {
    //     method: "GET",
    //     headers: {
    //       "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    //       "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
    //     },
    //   });
    //   if (response.ok) {
    //     let result = await response.json();
    //     console.log(result);
    //   } else {
    //     throw new Error("error in search");
    //   }
    // } catch (err) {
    //   console.log("error", err);
    // }
  };

  return (
    <Nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
      <Container className="flex-column align-items-start">
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
              <Link to="/library" className="nav-item nav-link d-flex align-items-center">
                <i className="bi bi-book-fill"></i>&nbsp; Your Library
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Form className="input-group mt-3" onSubmit={search}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    id="searchField"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === "Enter") {
                        search(e);
                        setSearchQuery("");
                      }
                    }}
                  />
                  <Button
                    variant="outline-secondary"
                    className="btn-sm h-100"
                    type="submit"
                    onClick={e => {
                      search(e);
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
