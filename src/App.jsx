import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
import Weather from "./components/Weather";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const cityName = pos.name;

    const apiKey = "408953d32ef358bb43dbca22013c66d3";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&=q${cityName}`;

    axios
      .get(url)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(success);
    setLoading(false);
  }, []);

  if (loading || !weatherInfo) {
    return <LoadingScreen />;
  }

  return (
    <main className="bg-black min-h-screen font-lato flex flex-col scroll-px-4 bg-[url(/paisaje1.1.jpg)] bg-cover">
      <Weather weatherInfo={weatherInfo} />
    </main>
  );
}

export default App;
