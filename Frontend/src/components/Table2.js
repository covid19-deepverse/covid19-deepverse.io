import React from 'react';
import axios from 'axios';

class Table2 extends React.Component {
  state = {
    Data: [],
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        'https://disease.sh/v3/covid-19/countries?sort=cases'
      );
      this.setState({ Data: data.slice(0, 20) });
    } catch (error) {
      console.error('Failed to fetch countries table data:', error);
    }
  }

  render() {
    const { Data } = this.state;
    return (
      <div className="countries_stat">
        <tr className="countries_stat-table">
          <th className="table-country">Country</th>
          <th className="table-confirmed">Confirmed</th>
          <th className="table-recovered">Recovered</th>
          <th className="table-deaths">Deaths</th>
        </tr>
        {Data.map(({ country, cases, recovered, deaths }, i) => (
          <tr className="table-th" key={i}>
            <th className="country-th">{country}</th>
            <th className="confirmed-th">{cases ? cases.toLocaleString() : '-'}</th>
            <th className="recovered-th">{recovered ? recovered.toLocaleString() : '-'}</th>
            <th className="deaths-th">{deaths ? deaths.toLocaleString() : '-'}</th>
          </tr>
        ))}
      </div>
    );
  }
}

export default Table2;
