import React from "react";
import { Form, Button } from "react-bootstrap";

function SearchCard({ city, setCity, handleSearch }) {
  return (
    <div className="search-card">
      <Form>
        <Form.Group controlId="formCity">
          <Form.Label className="text-light" >Inserisci una città</Form.Label>
          <Form.Control
            type="text"
            placeholder="Cerca la tua città"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Button variant="success mt-5" onClick={handleSearch}>
          Cerca
        </Button>
      </Form>
    </div>
  );
}

export default SearchCard;
