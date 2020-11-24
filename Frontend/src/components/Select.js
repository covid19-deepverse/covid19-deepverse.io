import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import { Scale } from 'styled-loaders-react';
import axios from 'axios';
import Table from './Table';
import CardValue from './CardValue';
function SelectCountry({ handleCountryChange, country, countriesData }) {
  const [countries, setCountries] = useState([]);
  let [countryData, setcountryData] = useState([]);
  let Data;
  let confirmed;
  const fetchCountry = async () => {
    try {
      const data = await axios.get('/getCountriesCode');

      // console.log(data.data);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCountrydata = async () => {
    try {
      const fetchdata = await axios.get('/getCountry');

      console.log(fetchdata.data);
      return fetchdata.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    const fetchAPI = async () => {
      setCountries(await fetchCountry());
      Data = await fetchCountrydata();
      console.log('Confirmed: ' + Data.confirmed.value);
      //  Data=Data.confirmed.value
      confirmed = Data.confirmed.value;
      //  console.log(countryData)
    };
    await fetchAPI();
  }, [setCountries]);

  return (
    <div className="app_left">
      {/* <FormControl className="app_dropdown">
        <Select
          variant="outlined"
          onChange={(e) => handleCountryChange(e.target.value)}
          value={country}
        >
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {countries.map((country2) => (
            <MenuItem value={country2.value}>{country2.name}</MenuItem>
          ))}
        </Select>
      </FormControl> */}

      <div className="loading-data">
        <div className="loading-data-gif">
          <Scale color="#50E3C2" size="20px" duration="3s" />
        </div>
        <p className="loading-data-title">LAST UPDATED : 2020-11-23 12:24:08</p>
      </div>
      <hr
        style={{
          color: '#6D7F99',
          backgroundColor: '#6D7F99',
          height: 0.2,
          borderColor: '#6D7F99',
        }}
      />

      <div className="app_left-top">
        <h1 className="app_left-top-title">Live Cases by Country</h1>
        <Table countries={countriesData} />
      </div>
      <hr
        style={{
          color: '#6D7F99',
          backgroundColor: '#6D7F99',
          height: 0.2,
          borderColor: '#6D7F99',
        }}
      />
      <CardValue />
      <hr
        style={{
          color: '#6D7F99',
          backgroundColor: '#6D7F99',
          height: 0.2,
          borderColor: '#6D7F99',
        }}
      />
    </div>
  );
}
export default SelectCountry;
