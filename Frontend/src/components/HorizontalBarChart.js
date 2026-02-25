import React from 'react';
import { HorizontalBar } from '@reactchartjs/react-chart.js';
import axios from 'axios';

const ASIAN_COUNTRIES = ['Iran', 'Indonesia', 'Japan', 'China', 'Singapore', 'South Korea', 'Thailand'];
const COUNTRY_CODES = ['Iran', 'Indonesia', 'Japan', 'China', 'Singapore', 'South%20Korea', 'Thailand'];

class HorizontalBarChart extends React.Component {
  state = {
    DataforHorizontal: [],
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `https://disease.sh/v3/covid-19/countries/${COUNTRY_CODES.join(',')}`
      );
      // Sort result to match ASIAN_COUNTRIES order
      const sorted = ASIAN_COUNTRIES.map((name) =>
        data.find(
          (d) => d.country === name || d.country === name.replace('%20', ' ')
        )
      );
      this.setState({
        DataforHorizontal: sorted.map((d) => (d ? d.cases : 0)),
      });
    } catch (error) {
      console.error('Failed to fetch Asian countries data:', error);
    }
  }

  render() {
    const { DataforHorizontal } = this.state;

    const data = {
      labels: ASIAN_COUNTRIES,
      datasets: [
        {
          label: 'Confirmed value',
          data: DataforHorizontal,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };

    return (
      <>
        <div className="header">
          <h1 className="title">Confirmed cases by Country in ASIA</h1>
        </div>
        <HorizontalBar data={data} options={options} />
      </>
    );
  }
}

export default HorizontalBarChart;
