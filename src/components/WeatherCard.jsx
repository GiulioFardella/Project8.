import React from "react";
import { Card } from "react-bootstrap"; // React-Bootstrap components

function WeatherCard({ data }) {
  const { name, main, weather } = data;

  return (
    <Card className="weather-card p-4 mt-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {weather[0]?.description}
        </Card.Subtitle>
        <Card.Text>Temperatura: {main.temp}°C</Card.Text>
        <Card.Text>Temperatura min: {main.temp_min}°C</Card.Text>
        <Card.Text>Temperatura max: {main.temp_max}°C</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WeatherCard;
