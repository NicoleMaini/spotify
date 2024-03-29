import { Col } from "react-bootstrap";

function AlbumCard(props) {
  return (
    <Col className="text-center" id={props.id}>
      <img className="img-fluid" src={props.img} alt="track" />
      <p className="mb-0">
        Track: "{`${props.title.length < 16 ? `${props.title}` : `${props.title.substring(0, 16)}...`}`}"
      </p>
      <p className="pt-0">Artist: {props.artist}</p>
    </Col>
  );
}
export default AlbumCard;
