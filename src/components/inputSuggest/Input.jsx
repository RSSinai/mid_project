import { useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_KEY;

const LocationInput = () => {
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [imageInput, setImageInput] = useState("");

  // Handles input change for address and fetches suggestions
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setAddress(inputValue);

    // Call the Google Places API for suggestions
    fetchSuggestions(inputValue);
  };

  // Fetches address suggestions using the Google Places API
  const fetchSuggestions = async (input) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${API_KEY}`
      );
      console.log("API Response:", response.data);
      setSuggestions(response.data.predictions);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  // Handles the selection of a suggested address and fetches coordinates
  const handleSelect = (suggestion) => {
    const selectedAddress = suggestion.description;
    console.log("Selected Address:", selectedAddress);

    // Fetch the coordinates of the selected address
    fetchCoordinates(selectedAddress);
  };

  // Fetches coordinates using the Google Geocoding API
  const fetchCoordinates = async (selectedAddress) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          selectedAddress
        )}&key=${API_KEY}`
      );

      const { lat, lng } = response.data.results[0].geometry.location;
      console.log("Coordinates for", selectedAddress, ":", { lat, lng });

      const apiUrl = "https://65ac10dffcd1c9dcffc78aea.mockapi.io/coordinates";

      // Simulating the data to send to the mock API
      const newData = {
        geocode: [lat, lng],
        popUp: textInput,
        imageURL: imageInput,
      };

      // Make a POST request to the mock API
      const responseAPI = await axios.post(apiUrl, newData);

      console.log("API Post Response:", responseAPI.data);
      window.location.reload();
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  return (
    <div className="inputs">
      <div className="text">Enter text:</div>
      <input
        type="text"
        placeholder="Enter some text"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />

      <div className="text">Enter Image URL:</div>
      <input
        type="text"
        placeholder="Enter image URL"
        value={imageInput}
        onChange={(e) => setImageInput(e.target.value)}
      />

      <div>Enter an address:</div>
      <input
        type="text"
        value={address}
        onChange={handleInputChange}
        placeholder="Enter address"
      />

      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSelect(suggestion)}>
            {suggestion.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationInput;
