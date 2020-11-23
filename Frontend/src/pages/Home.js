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

  const [mapCenter, setMapCenter] = useState({ lat: 51.505, lng:  -0.09});

  const [mapZoom, setMapZoom] = useState(2);
  const [mapCountries, setMapCountries] = useState([]);
  const [tableData, setTableData] = useState([]);

  const [countryData, setcountryData] = useState([]);

  const fetchCountryData=async()=>{
    try {
      const data= await axios.get('/getCountry')
      return data.data;
    } catch (error) {
      console.log(error)
    }
  }
  const fetchCountry = async () => {
    try {
      const data = await axios.get('/getCountriesData');
      
      // console.log("data: "+data.data);
      
      return data.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchAPI = async () => {
      setMapCountries(await fetchCountry());
      setcountryData(await fetchCountryData())
      const sortedData = sortData(await fetchCountry());
      setTableData(sortedData);
    };
    fetchAPI();
  }, [setMapCountries]);


  


const fetchCountry2 =async (countryCode)=>{
  try {
   await axios.get(`/getCountriesData/${countryCode}`).then(res => {
      

      // console.log(res.data)
      // setCountry(countryCode)
      // setMapCenter([res.data.countryInfo.lat, res.data.countryInfo.long]);
      // setMapZoom(4)
      console.log(res.data.countryInfo.lat, res.data.countryInfo.long)
       return setMapCenter([res.data.countryInfo.lat, res.data.countryInfo.long]);
      }).then(()=>{
        return setCountry(countryCode)
      }).then(()=>{
        return setMapZoom(4)
      })
      .catch(error => {
        console.error(error)
      })
     
       

  } catch (error) {
      console.log(error)
  }
} 


  const handleCountryChange = async (event) => {
    const countryCode = event;
    console.log('YOOOO >>>>', countryCode);

    

    await fetchCountry2(countryCode);
  
     
    
    // console.log(countryCode)


    // console.log(countryCode)

    // https://disease.sh/v3/covid-19/all
  };
  const handleCaseTypeChange =async (event)=>{
    
    setCasesType(event);

    console.log(event)
  }
  return (
    <div className="home">
      <Filters 
       handleCaseTypeChange={handleCaseTypeChange}
       />

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
        // countryData={countryData}
      />

    </div>
  );
}

export default Home;
