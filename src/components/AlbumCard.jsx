import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addSong, playSong } from "../actions";

function AlbumCard({ album }) {
  const dispatch = useDispatch();

  return (
    <Col className="text-center" id={album.id}>
      <img
        className="img-fluid"
        src={album.album.cover_medium}
        alt="track"
        onClick={() => {
          dispatch(playSong(album));
        }}
      />

      <div
        className="heart"
        onClick={() => {
          dispatch(addSong(album));
        }}
      >
        <i className="bi bi-heart text-white"></i>
      </div>

      {/* <i className="bi bi-heart-fill"></i> */}
      <p className="mb-0">
        Track: "{`${album.title.length < 16 ? `${album.title}` : `${album.title.substring(0, 16)}...`}`}"
      </p>
      <p className="pt-0">Artist: {album.artist.name}</p>
    </Col>
  );
}
export default AlbumCard;
