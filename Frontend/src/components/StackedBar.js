import React from 'react';
import { Bar } from '@reactchartjs/react-chart.js';
import axios from 'axios';

const options = {
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
};

class StackedBar extends React.Component {
  state = {
    Data: [],
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        'https://disease.sh/v3/covid-19/historical/Thailand?lastdays=14'
      );
      const timeline = data.timeline;
      const transformed = Object.keys(timeline.cases).map((date) => ({
        date,
        confirmed: timeline.cases[date],
        recovered: timeline.recovered[date],
        deaths: timeline.deaths[date],
      }));
      this.setState({ Data: transformed });
    } catch (error) {
      console.error('Failed to fetch Thailand historical data:', error);
    }
  }

  render() {
    const { Data } = this.state;
    const chartData = {
      labels: Data.map(({ date }) => date),
      datasets: [
        {
          label: 'Confirmed',
          data: Data.map(({ confirmed }) => confirmed),
          backgroundColor: 'rgb(255, 99, 132)',
        },
        {
          label: 'Recovered',
          data: Data.map(({ recovered }) => recovered),
          backgroundColor: 'rgb(54, 162, 235)',
        },
        {
          label: 'Deaths',
          data: Data.map(({ deaths }) => deaths),
          backgroundColor: 'rgb(75, 192, 192)',
        },
      ],
    };
    return (
      <>
        <div className="header">
          <h1 className="title">
            Past 14 Days Chart : <strong>Thailand</strong>
          </h1>
        </div>
        <Bar data={chartData} options={options} />
      </>
    );
  }
}

export default StackedBar;
