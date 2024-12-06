import React from "react";
import { Button, Form } from "react-bootstrap"; // React-Bootstrap components

function SearchCard({ city, setCity, handleSearch }) {
  return (
    <div className="search-card">
      <Form.Control
        type="text"
        placeholder="Cerca una città"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button onClick={handleSearch} className="mt-3">
        Cerca
      </Button>
    </div>
  );
}

export default SearchCard;
