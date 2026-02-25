/**
 *   Statistics Page
 *
 */

import React from 'react';

// IMPORT COMPONENTS FOR SHOW
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import StackedBar from '../components/StackedBar';
import DoughnutChart from '../components/DoughnutChart';
import PieChart from '../components/PieChart';
import HorizontalBarChart from '../components/HorizontalBarChart';
import CountryPicker from '../components/CountryPicker';
import Table2 from '../components/Table2';

// IMPORT LIBRARY
import axios from 'axios';
import CountUp from 'react-countup';

const API_BASE = 'https://disease.sh/v3/covid-19';

// Normalize disease.sh format to expected component format
const normalizeGlobal = (raw) => ({
  confirmed: { value: raw.cases },
  recovered: { value: raw.recovered },
  deaths: { value: raw.deaths },
  lastUpdate: new Date(raw.updated).toISOString(),
});

const normalizeCountry = (raw) => ({
  confirmed: { value: raw.cases },
  recovered: { value: raw.recovered },
  deaths: { value: raw.deaths },
});

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
    try {
      const { data: raw } = await axios.get(`${API_BASE}/countries/${country}`);
      this.setState({ data: normalizeCountry(raw), country });
    } catch (error) {
      console.error('Failed to fetch country data:', error);
    }
  };

  async componentDidMount() {
    try {
      const { data: raw } = await axios.get(`${API_BASE}/all`);
      const confirmed = raw.cases;
      const recovered = raw.recovered;
      const deaths = raw.deaths;
      this.setState({
        data: normalizeGlobal(raw),
        ConfirmedData: confirmed,
        RecoveriesData: recovered,
        DeathData: deaths,
        ActiveData: confirmed - (recovered + deaths),
        Fatality: ((deaths / recovered) * 100).toFixed(2),
        RecoveredRate: ((recovered / confirmed) * 100).toFixed(2),
      });
    } catch (error) {
      console.error('Failed to fetch global data:', error);
    }
  }

  componentWillUnmount() {}

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

    return (
      <>
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
                  <CountUp
                    start={0}
                    end={DeathData}
                    duration={3}
                    separator=","
                  />
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
          <div className="section3-section4">
            <div className="section4">
              <div className="section4-graph">
                <div className="section4-title">Graph Overviews</div>
                <div className="section4-graph-show">
                  <div className="section4-graph-chart">
                    <CountryPicker
                      handleCountryChange={this.handleCountryChange}
                    />
                    {country ? (
                      <BarChart data={data} country={country} />
                    ) : (
                      <LineChart data={data} country={country} />
                    )}
                  </div>
                </div>
              </div>
              <div className="section4-graph">
                <div className="section4-title">Graph Overviews</div>
                <div className="section4-graph-show">
                  <div className="section4-graph-chart">
                    <StackedBar />
                  </div>
                </div>
              </div>
            </div>
            <div className="section2">
              <div className="section2-title">Graph Overviews</div>
              <div className="section2-wrapper">
                <div className="section2-left">
                  <HorizontalBarChart data={data} />
                </div>
                <div className="section2-center">
                  <DoughnutChart />
                </div>
                <div className="section2-right">
                  <PieChart data={data} />
                </div>
              </div>
            </div>
            <div className="section3">
              <div className="section3-title">Country Overviews</div>
              <Table2 />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Statistics;
