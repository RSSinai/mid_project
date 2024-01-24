// LocationInput.js
import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_KEY

const LocationInput = () => {
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setAddress(inputValue);

    // Call the Google Places API for suggestions
    fetchSuggestions(inputValue);
  };

  const fetchSuggestions = async (input) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${API_KEY}`
      );

      const suggestions = response.data.predictions.map((prediction) => prediction.description);
      setSuggestions(suggestions);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleSelect = (selectedAddress) => {
    // Perform any additional actions when an address is selected
    console.log('Selected Address:', selectedAddress);

    // You may want to fetch the exact coordinates for the selected address using the Geocoding API
    fetchCoordinates(selectedAddress);
    
  };

  const fetchCoordinates = async (selectedAddress) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          selectedAddress
        )}&key=${API_KEY}`
      );

      // Extract latitude and longitude from the response
      const { lat, lng } = response.data.results[0].geometry.location;

      console.log('Coordinates for', selectedAddress, ':', { lat, lng });


            const apiUrl = 'https://65ac10dffcd1c9dcffc78aea.mockapi.io/coordinates';

      // Simulate the data you want to add to the array
      const newData = { geocode: [lat,lng], popUp:'kakasoya' };

      // Make a POST request to the mock API endpoint
      const responseAPI = await axios.post(apiUrl, newData);

      // // Update state with the new array (assuming the response contains the updated array)
      // setNewArray(responseAPI.data.updatedArray);
      window.location.reload();
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
  };

  

  return (
    <div className='inputs'>
      <div>Enter an address</div>
      <input
        type="text"
        placeholder=""
        value={address}
        onChange={handleInputChange}
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSelect(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
      <div className='text'>Enter text:</div>
      <input
        type="text"
        placeholder=""
      />
    </div>
  );
};

export default LocationInput;
