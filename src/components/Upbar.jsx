import { Row, Col, Nav } from "react-bootstrap";

function Upbar() {
  return (
    <Row>
      <Col>
        <Nav className="mainLinks">
          <Nav.Link>TRENDING</Nav.Link>
          <Nav.Link>PODCAST</Nav.Link>
          <Nav.Link>MOODS AND GENRES</Nav.Link>
          <Nav.Link>NEW RELEASES</Nav.Link>
          <Nav.Link>DISCOVER</Nav.Link>
        </Nav>
      </Col>
    </Row>
  );
}

export default Upbar;
