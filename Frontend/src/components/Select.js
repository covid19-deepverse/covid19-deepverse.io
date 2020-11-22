import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import axios from 'axios';
function SelectCountry({ handleCountryChange, country }) {
  const [countries, setCountries] = useState([]);
  const fetchCountry = async () => {
    try {
      const data = await axios.get('/getCountriesCode');

      console.log(data.data);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountry());
    };
    fetchAPI();
  }, [setCountries]);

  return (
    <div className="app_left">
      <div className="app_header">
        <FormControl className="app_dropdown">
          <Select
            class="select-style"
            variant="outlined"
            onChange={(e) => handleCountryChange(e.target.value)}
            value={country}
          >
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country2) => (
              <MenuItem value={country2.value}>{country2.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
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
        <h1 className="app_left-top-title">TOP 10 CONFIRMED CASES</h1>
        <div className="app_left-top-table">
          <div className="table-rank1">
            <p className="number">1</p>
            <div>
              <p className="country-name1">UNITED STATES</p>
              <p className="cases-percent1">6,798,630 - 22.0%</p>
            </div>
          </div>
          <div className="table-ranks">
            <p className="number">2</p>
            <p className="country-name">INDIA</p>
            <p className="cases-percent">5.086K - 10.8%</p>
          </div>
          <div className="table-ranks">
            <p className="number">3</p>
            <p className="country-name">BRAZIL</p>
            <p className="cases-percent">4.382K - 8.5%</p>
          </div>
          <div className="table-ranks">
            <p className="number">4</p>
            <p className="country-name">RUSSIA</p>
            <p className="cases-percent">1.079K - 7.9%</p>
          </div>
          <div className="table-ranks">
            <p className="number">5</p>
            <p className="country-name">MEXICO</p>
            <p className="cases-percent">760K - 7.8%</p>
          </div>
          <div className="table-ranks">
            <p className="number">6</p>
            <p className="country-name">PERU</p>
            <p className="cases-percent">738K - 7.7%</p>
          </div>
          <div className="table-ranks">
            <p className="number">7</p>
            <p className="country-name">COLOMBIA</p>
            <p className="cases-percent">728K - 4.8%</p>
          </div>
          <div className="table-ranks">
            <p className="number">8</p>
            <p className="country-name">SOUTH AFRICA</p>
            <p className="cases-percent">651K - 3.8%</p>
          </div>
          <div className="table-ranks">
            <p className="number">9</p>
            <p className="country-name">SPAIN</p>
            <p className="cases-percent">603K - 2.8%</p>
          </div>
          <div className="table-ranks">
            <p className="number">10</p>
            <p className="country-name">ARGENTINA</p>
            <p className="cases-percent">577K - 2.6%</p>
          </div>
        </div>
      </div>
      <hr
        style={{
          color: '#6D7F99',
          backgroundColor: '#6D7F99',
          height: 0.2,
          borderColor: '#6D7F99',
        }}
      />
      <div className="app_left-bottom">
        <h1 className="app_left-bottom-title">WORLD</h1>
        <div className="table-total">
          <p className="table-total-title">TOTAL CONFIRMED</p>
          <p className="table-total-cases">29,929,612</p>
        </div>
        <div className="table-total">
          <p className="table-total-title">TOTAL RECOVERED</p>
          <p className="table-total-cases">21,468,194</p>
        </div>
        <div className="table-total">
          <p className="table-total-title">TOTAL DEATHS</p>
          <p className="table-total-cases">947,049</p>
        </div>
      </div>
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
