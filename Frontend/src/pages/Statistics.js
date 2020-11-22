/**
 *   Statistics Page
 *
 */

import React from 'react';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';

import CountryPicker from '../components/CountryPicker';
import axios from 'axios';
class Statistics extends React.Component {
  state = {
    data: {},
    country: '',
  };
  handleCountryChange = async (country) => {
    const fetchdata = await axios.get(`/getCountry/${country}`);
    console.log(fetchdata.data);
    this.setState({ data: fetchdata.data, country: country });
    //fetch data

    // set the state
  };
  async componentDidMount() {
    const fetchdata = await axios.get('/getCountry');
    this.setState({ data: fetchdata.data });

    console.log(this.state.data);
  }

  render() {
    const { data, country } = this.state;
    console.log('Country :' + country);
    return (
      // <div className="statistics">
      //   <div className="chart">
      //   <CountryPicker handleCountryChange={this.handleCountryChange}/>
      //   {country ? <BarChart data={data} country={country}/>: <LineChart data={data} country={country}/>}

      //   </div>
      // </div>

      <div className="statistics">
        <div className="section1">
          <div className="section1-title">WORLD</div>
          <div className="section1-row1">
            <div className="row1-total-cases">
              <p className="total-cases-numbers">58,860,168</p>
              <p className="total-cases-title">TOTAL CASES</p>
            </div>
            <div className="row1-total-cases">
              <p className="deaths-numbers">1,398,830</p>
              <p className="deaths-title">DEATHS</p>
            </div>
            <div className="row1-total-cases">
              <p className="active-cases-numbers">17,276,581</p>
              <p className="active-cases-title">ACTIVE CASES</p>
            </div>
          </div>
          <div className="section1-row2">
            <div className="row1-total-cases">
              <p className="fatality-rate-numbers">2.38%</p>
              <p className="fatality-rate-title">FATALITY RATE</p>
            </div>
            <div className="row1-total-cases">
              <p className="recoveries-numbers">40,184,757</p>
              <p className="recoveries-title">RECOVERIES</p>
            </div>
            <div className="row1-total-cases">
              <p className="recovery-rate-numbers">68.27%</p>
              <p className="recovery-rate-title">RECOVERY RATE</p>
            </div>
          </div>
        </div>
        <div className="section2">
          <div></div>
          <div></div>
        </div>
        <div className="section3">
          <div></div>
          <div></div>
        </div>
        <div className="section4">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Statistics;
