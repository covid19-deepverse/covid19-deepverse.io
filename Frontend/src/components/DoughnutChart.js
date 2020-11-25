import React from 'react';
import { Doughnut } from '@reactchartjs/react-chart.js';

const DoughnutChart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const Data = {
    labels: ['Confirmed', 'Recovered', 'Deaths'],
    datasets: [
      {
        label: 'Cases',
        data: [12, 19, 8],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgb(75, 192, 192,1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="header">
        <h1 className="title">
          Distribution of cases : <strong>Thailand</strong>
        </h1>
      </div>
      <Doughnut data={Data} />
    </>
  );
};
export default DoughnutChart;
