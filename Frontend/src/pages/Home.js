/**
 *   Home Page
 *
 */

import React, { useState, useEffect } from 'react';
import Filters from '../components/Filters';
import MapView from '../components/MapView';
import SelectCountry from '../components/Select';
import { sortData, prettyPrintStat } from '../components/util';

import axios from 'axios';

function Home() {
  const [country, setCountry] = useState('worldwide');
  const [casesType, setCasesType] = useState('cases');
  const [mapCenter, setMapCenter] = useState({ lat: 51.505, lng: -0.09 });
  const [mapZoom, setMapZoom] = useState(2);
  const [mapCountries, setMapCountries] = useState([]);

  const fetchCountry = async () => {
    try {
      const data = await axios.get('/getCountriesData');

      console.log(data.data);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchAPI = async () => {
      setMapCountries(await fetchCountry());
    };
    fetchAPI();
  }, [setMapCountries]);

  const fetchCountry2 = async (countryCode) => {
    try {
      const data = await axios.get(`/getCountriesData/${countryCode}`);

      return data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleCountryChange = async (event) => {
    const countryCode = event;
    console.log('YOOOO >>>>', countryCode);
    const data = await fetchCountry2(countryCode);
    console.log(data);
    setCountry(countryCode);
    setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
    setMapZoom(4);

    // console.log(countryCode)

    // https://disease.sh/v3/covid-19/all
  };

  return (
    <div className="home">
      <Filters />
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
      />
    </div>
  );
}

export default Home;
