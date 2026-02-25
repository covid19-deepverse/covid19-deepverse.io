import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 2,
    border: 0,
    color: 'white',
  },
  label: {
    textTransform: 'capitalize',
    color: '#FFFFFF',
    padding: '0 5px 0 5px',
  },
});

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchCountried] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const { data } = await axios.get(
          'https://disease.sh/v3/covid-19/countries?sort=cases'
        );
        setFetchCountried(data.map((country) => country.country));
      } catch (error) {
        console.error('Failed to fetch countries list:', error);
      }
    };
    fetchAPI();
  }, []);

  return (
    <div className="country-picker">
      <div>
        <FormControl classes={{ root: classes.root, label: classes.label }}>
          <NativeSelect
            defaultValue=""
            onChange={(e) => handleCountryChange(e.target.value)}
          >
            <option value="" className="country-picker-select">
              Global
            </option>
            {fetchedCountries.map((country, i) => (
              <option key={i} value={country}>
                {country}{' '}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </div>
    </div>
  );
};

export default CountryPicker;
