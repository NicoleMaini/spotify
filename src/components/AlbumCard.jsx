import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addSong } from "../actions";

function AlbumCard(props) {
  const dispatch = useDispatch();

  return (
    <Col className="text-center" id={props.id}>
      <img className="img-fluid" src={props.img} alt="track" />
      <Link to="/library">
        <div
          className="heart"
          onClick={() => {
            dispatch(addSong);
          }}
        >
          <i className="bi bi-heart text-white"></i>
        </div>
      </Link>
      {/* <i className="bi bi-heart-fill"></i> */}
      <p className="mb-0">
        Track: "{`${props.title.length < 16 ? `${props.title}` : `${props.title.substring(0, 16)}...`}`}"
      </p>
      <p className="pt-0">Artist: {props.artist}</p>
    </Col>
  );
}
export default AlbumCard;
