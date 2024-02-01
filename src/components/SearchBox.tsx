import { useState } from "react";
import "./SearchBox.css";

interface DataType {
  display_name: string;
  class: string;
  place_id: number;
  lat: string;
  lon: string;
}

const SearchBox = ({
  latitudeData,
  longitudeData,
}: {
  latitudeData: (lat: number) => number;
  longitudeData: (lon: number) => number;
}) => {
  const [placeData, setPlaceData] = useState<DataType[]>([]);
  const [placeName, setPlaceName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`https://geocode.maps.co/search?q=${placeName}`)
      .then((response) => response.json())
      .then((response) => {
        setPlaceData(response);
      });
  };
  const handlePlaceClick = (placeData: DataType) => {
    console.log("test", placeData);
    latitudeData(Number(placeData.lon));
    longitudeData(Number(placeData.lat));
  };

  return (
    <div className="search-box-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          placeholder="Enter Place Name"
          onChange={(e) => setPlaceName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {placeData && (
        <div className="place-box">
          {placeData.map((d) => (
            <li
              onClick={() => handlePlaceClick(d)}
              className="individual-place"
              key={d.place_id}
            >
              {d.display_name}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
