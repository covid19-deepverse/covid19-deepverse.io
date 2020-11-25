import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from '../assets/css/CountryPicker.module.css';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 2,
    border: 0,
    color: 'white',
    //padding: '0 30px',
    //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
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

  const fetchCountries = async () => {
    try {
      const {
        data: { countries },
      } = await axios.get('/country');

      return countries.map((country) => country.name);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchCountried(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchCountried]);

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
