import React from 'react';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';
import styled from 'styled-components';

const casesTypeColors = {
  cases: {
    hex: '#CC1034',
    // rgb: 'rgb(204, 16, 52)',
    // half_op: 'rgba(204, 16, 52, 0.5)',
    multiplier: 800,
  },
  recovered: {
    hex: '#7dd71d',
    // rgb: 'rgb(125, 215, 29)',
    // half_op: 'rgba(125, 215, 29, 0.5)',
    multiplier: 1200,
  },
  deaths: {
    hex: '#fb4443',
    // rgb: 'rgb(251, 68, 67)',
    // half_op: 'rgba(251, 68, 67, 0.5)',
    multiplier: 2000,
  },
};

const StyledPop = styled(Popup)`
  background-color: '#121429';
  border-radius: 20;
  border: 1px solid $blue-sea-color;
  padding: 0;
  .leaflet-popup-content-wrapper {
    border-radius: 3;
    background-color: #121429;
    border: 1px solid $blue-sea-color;
    padding: 5px 0 5px 0;
    //opacity: 0.5;
  }

  .leaflet-popup-tip-container {
    visibility: hidden;
    border: 1px solid $blue-sea-color;
    padding: 0;
  }
`;

export const sortData = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format('0.0a')}` : '+0';

// DRAW Circles on the map with interactive tooltip
export const showDataOnMap = (data, casesType = 'cases') =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <StyledPop>
        <div className="info-container">
          <div
            className="info-flag"
            style={{
              backgroundImage: `url(${country.countryInfo.flag})`,
            }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format('0,0')}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format('0,0')}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format('0,0')}
          </div>
        </div>
      </StyledPop>
    </Circle>
  ));
