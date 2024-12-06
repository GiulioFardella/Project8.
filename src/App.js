import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap"; // React-Bootstrap components
import SearchCard from "./components/SearchCard";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null); // Dati meteo
  const [city, setCity] = useState(""); // Città cercata
  const [error, setError] = useState(null); // Stato per errori

  const handleSearch = async () => {
    if (!city) return;

    const API_KEY = "79bbf2fae735fe24f133791da2e863ae";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Città non trovata.");
      const data = await response.json();
      setWeatherData(data); // Salva i dati meteo
      setError(null); // Resetta gli errori
    } catch (err) {
      console.error("Errore nella richiesta:", err);
      setWeatherData(null); // Resetta i dati meteo
      setError(err.message); // Mostra l'errore
    }
  };

  return (
    <div className="App">
      <h1 className="text-light" >S.E.T.I Meteo</h1>
      <SearchCard city={city} setCity={setCity} handleSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
