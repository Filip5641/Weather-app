import { useState } from "react";
import Search from "./components/Search";
import "./App.css";
import useFetch from "./components/useFetch";

function App() {
  const [search, setSearch] = useState(null);
  const [input, setInput] = useState("");
  const {
    data: weatherData,
    error,
    loading,
  } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`,
    [search]
  );
  function handleSearch(e) {
    e.preventDefault();
    setSearch(input);

    setInput("");
  }
  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  function displayTemp(temp) {
    return (temp - 273).toFixed(1);
  }
  return (
    <>
      <h1>Weather App</h1>
      <div className="weather">
        <Search setInput={setInput} handleSearch={handleSearch} input={input} />

        {loading ? (
          <h2>weather data is being loaded...</h2>
        ) : (
          <div className="weather__result">
            <div className="weathe__city__name">
              {weatherData && weatherData.name ? weatherData.name : null}
            </div>
            <div className="weather__time">
              {weatherData ? getCurrentDate() : null}
            </div>
            <div className="weather__description">
              {weatherData && weatherData.weather && weatherData.weather[0]
                ? weatherData.weather[0].description
                : null}
            </div>
            <div className="weather__temp">
              {weatherData && weatherData.main && weatherData.main.temp
                ? `${displayTemp(weatherData.main.temp)}°C`
                : null}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
