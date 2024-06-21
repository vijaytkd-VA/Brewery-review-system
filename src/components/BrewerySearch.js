import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../Styles/search.css"
import AuthDetails from './Authdetails';

function BrewerySearch() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('city'); 
  const navigate = useNavigate();

  const searchBreweries = async () => {
    try {
      let endpoint = '';

      if (searchType === 'city') {
        endpoint = `https://api.openbrewerydb.org/v1/breweries?by_city=san_diego&per_page=3`;
      } else if (searchType === 'name') {
        endpoint = `https://api.openbrewerydb.org/v1/breweries?by_name=cooper&per_page=3`;
      } else if (searchType === 'type') {
        endpoint = ` https://api.openbrewerydb.org/v1/breweries?by_type=micro&per_page=3`;
      }

      const response = await axios.get(endpoint);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleAddReview = (breweryId) => {
    navigate(`/brewery/${breweryId}/review`);
  };
 
  return (
    <div className="brewery-search-container">
      <h2>Brewery Search</h2>
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
        <option value="city">Search by City</option>
        <option value="name">Search by Name</option>
        <option value="type">Search by Type</option>
      </select>
      <button onClick={searchBreweries}>Search</button>
      <AuthDetails/>

      
      <ul>
        {searchResults.map((brewery) => (
          <li key={brewery.id}>
            <div className="brewery-card">
              <h3>{brewery.name}</h3>
              <p>Address: {brewery.street}, {brewery.city}, {brewery.state}</p>
              <p>Phone: {brewery.phone}</p>
              
              <p>Website: {brewery.website_url && <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a>}</p>
               
              <button onClick={() => handleAddReview(brewery.id)}>Add Review</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrewerySearch;
