import React from 'react';
import { Pie } from '@reactchartjs/react-chart.js';

const data = {
  labels: ['Confirmed', 'Recovered', 'Deaths'],
  datasets: [
    {
      label: 'Cases',
      data: [20163481, 38408247, 1413325],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132, 1)',
        'rgb(54, 162, 235,1)',
        'rgb(75, 192, 192,1)',
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => (
  <>
    <div className="header">
      <h1 className="title">
        Distribution of cases : <strong>World</strong>
      </h1>
    </div>
    <Pie data={data} />
  </>
);

export default PieChart;
