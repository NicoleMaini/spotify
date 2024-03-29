import { Button, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeCompanieAction } from "../redux/actions";

function ListFavourite() {
  // dobbiammo recuperare l'array delle aziende:
  const listCompanies = useSelector(state => state.favourites.cont);
  // creaimo la funzione per dispacciare le inforamzioni
  const dispatch = useDispatch();

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="display-4 my-3">Your Favorites Companies</h1>
        <Link to="/">
          <Button variant="outline-secondary p-2">Go Back</Button>
        </Link>
      </div>
      <ListGroup>
        {listCompanies.map((companie, i) => {
          return (
            <ListGroupItem key={i}>
              <Button
                className="p-0 me-2"
                onClick={() => {
                  // risettiamo lo stato con l'azienda selezionata
                  dispatch(removeCompanieAction(i));
                }}
              >
                -
              </Button>
              <Link to={`/${companie.company_name}`}>{companie.company_name}</Link>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Container>
  );
}

export default ListFavourite;
