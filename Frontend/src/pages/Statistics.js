/**
 *   Statistics Page
 *
 */

import React from 'react';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';

import CountryPicker from '../components/CountryPicker';
import axios from 'axios';

import CountUp from 'react-countup';

class Statistics extends React.Component {
  state = {
    data: {},
    country: '',
    ConfirmedData: '',
    RecoveriesData: '',
    DeathData: '',
    ActiveData: '',
    Fatality: '',
    RecoveredRate: '',
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
    this.setState({
      data: fetchdata.data,
      ConfirmedData: fetchdata.data.confirmed.value,
      RecoveriesData: fetchdata.data.recovered.value,
      DeathData: fetchdata.data.deaths.value,
    });
    this.setState({
      ActiveData:
        Number(this.state.ConfirmedData) -
        (Number(this.state.RecoveriesData) + Number(this.state.DeathData)),
    });
    this.setState({
      Fatality: (
        (Number(this.state.DeathData) / Number(this.state.RecoveriesData)) *
        100
      ).toFixed(2),
    });
    this.setState({
      RecoveredRate: (
        (Number(this.state.RecoveriesData) / Number(this.state.ConfirmedData)) *
        100
      ).toFixed(2),
    });

    console.log('RecoveredRate: ' + this.state.RecoveredRate);
    console.log(this.state.data);
  }

  render() {
    const {
      data,
      country,
      ConfirmedData,
      RecoveriesData,
      DeathData,
      ActiveData,
      Fatality,
      RecoveredRate,
    } = this.state;
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
              <p className="total-cases-numbers">
                <CountUp
                  start={0}
                  end={ConfirmedData}
                  duration={3}
                  separator=","
                />
              </p>
              <p className="total-cases-title">TOTAL CASES</p>
            </div>
            <div className="row1-total-cases">
              <p className="deaths-numbers">
                <CountUp start={0} end={DeathData} duration={3} separator="," />
              </p>
              <p className="deaths-title">DEATHS</p>
            </div>
            <div className="row1-total-cases">
              <p className="active-cases-numbers">
                <CountUp
                  start={0}
                  end={ActiveData}
                  duration={3}
                  separator=","
                />
              </p>
              <p className="active-cases-title">ACTIVE CASES</p>
            </div>
          </div>
          <div className="section1-row2">
            <div className="row1-total-cases">
              <p className="fatality-rate-numbers">{Fatality}%</p>
              <p className="fatality-rate-title">FATALITY RATE</p>
            </div>
            <div className="row1-total-cases">
              <p className="recoveries-numbers">
                <CountUp
                  start={0}
                  end={RecoveriesData}
                  duration={3}
                  separator=","
                />
              </p>
              <p className="recoveries-title">RECOVERIES</p>
            </div>
            <div className="row1-total-cases">
              <p className="recovery-rate-numbers">{RecoveredRate}%</p>
              <p className="recovery-rate-title">RECOVERY RATE</p>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="section2-title">NEW CASES</div>
          <div className="section2-graph">
            <div className="section2-graph-chart">
              <CountryPicker handleCountryChange={this.handleCountryChange} />
              {country ? (
                <BarChart data={data} country={country} />
              ) : (
                <LineChart data={data} country={country} />
              )}
            </div>
          </div>
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
