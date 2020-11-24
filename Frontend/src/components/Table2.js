import React from 'react';
import numeral from 'numeral';
import { Table } from '@material-ui/core';

class Table2 extends React.Component {
  state = {
    Data: [],
  };

  async componentDidMount() {
    let table = document.getElementById('countries_stat');

    fetch(
      'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
          'x-rapidapi-key':
            'daf35fb907msh5943652ba5bddf2p1aa387jsnd6bac0794a2b',
        },
      }
    )
      .then((response) =>
        response.json().then((data) => {
          //   console.log('====================================');
          this.setState({ Data: data.countries_stat });
          console.log(this.state.Data);

          //   console.log('====================================');
        })
      )
      .catch((err) => {
        console.log(err);
      });
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
        {Data.map(({ country_name, cases, deaths, total_recovered }) => (
          <tr className="table-th">
            <th className="country-th">{country_name}</th>
            <th className="confirmed-th">{cases}</th>
            <th className="recovered-th">{deaths}</th>
            <th className="deaths-th">{total_recovered}</th>
          </tr>
        ))}
      </div>

      // <div className="app_left-top-table">
      //   {countries.map(({ country, cases }) => (
      //     <tr>
      //       <td>
      //         <strong className="country-name">{country}</strong>
      //       </td>
      //       <td>
      //         {/* <strong>{cases}</strong> */}
      //         <strong className="cases-percent">
      //           {numeral(cases).format('0,0')}
      //         </strong>
      //       </td>
      //     </tr>
      //   ))}
      // </div>
    );
  }
}

export default Table2;
