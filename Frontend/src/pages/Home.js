/**
 *   Home Page
 *
 */

import React, { useState, useEffect } from 'react';
import Filters from '../components/Filters';
import MapView from '../components/MapView';
import SelectCountry from '../components/Select';
import { sortData } from '../components/util';

import axios from 'axios';

const API_BASE = 'https://disease.sh/v3/covid-19';

function Home() {
  const [country, setCountry] = useState('worldwide');
  const [casesType, setCasesType] = useState('cases');

  const [mapCenter, setMapCenter] = useState({ lat: 51.505, lng: -0.09 });

  const [mapZoom, setMapZoom] = useState(2);
  const [mapCountries, setMapCountries] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const { data } = await axios.get(`${API_BASE}/countries`);
        setMapCountries(data);
        setTableData(sortData(data));
      } catch (error) {
        console.error('Failed to fetch countries data:', error);
      }
    };
    fetchAPI();
  }, []);

  const handleCountryChange = async (countryCode) => {
    try {
      const { data } = await axios.get(`${API_BASE}/countries/${countryCode}`);
      setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
      setCountry(countryCode);
      setMapZoom(4);
    } catch (error) {
      console.error('Failed to fetch country data:', error);
    }
  };

  const handleCaseTypeChange = (event) => {
    setCasesType(event);
  };

  return (
    <div className="home">
      <Filters handleCaseTypeChange={handleCaseTypeChange} />

      <MapView
        casesType={casesType}
        countries={mapCountries}
        center={mapCenter}
        zoom={mapZoom}
      ></MapView>
      <SelectCountry
        className="select-country"
        handleCountryChange={handleCountryChange}
        country={country}
        countriesData={tableData}
      />
    </div>
  );
}

export default Home;
