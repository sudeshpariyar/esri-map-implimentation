import { useState } from "react";
import "./App.css";
import MapComponent from "./components/MapComponent";
import SearchBox from "./components/SearchBox";

function App() {
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  const handleLatitude = (lat: number) => {
    console.log("handleLatitude", lat);
    setLatitude(lat);
  };
  const handleLongitude = (lon: number) => {
    console.log("handleLongitude", lon);
    setLongitude(lon);
  };

  return (
    <div className="app-wrapper">
      <MapComponent longitude={longitude} latitude={latitude} />
      <div className="test">
        <SearchBox
          latitudeData={handleLatitude}
          longitudeData={handleLongitude}
        />
      </div>
    </div>
  );
}

export default App;
