import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { playSong } from "../actions";
import Like from "./Like";

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
      <Like song={album} />
      <p className="mb-0">
        Track: "{`${album.title.length < 16 ? `${album.title}` : `${album.title.substring(0, 16)}...`}`}"
      </p>
      <p className="pt-0">Artist: {album.artist.name}</p>
    </Col>
  );
}
export default AlbumCard;
