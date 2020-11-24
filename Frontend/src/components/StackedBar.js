import React from 'react';
import { Bar } from '@reactchartjs/react-chart.js';

const data = {
  labels: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
  ],
  datasets: [
    {
      label: 'Confirmed',
      data: [12, 19, 3, 5, 2, 3, 4, 7, 9, 12, 16, 18, 25, 19],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Recovered',
      data: [2, 3, 20, 5, 1, 4, 5, 9, 11, 12, 10, 6, 4, 8, 5],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: 'Deaths',
      data: [3, 10, 13, 15, 22, 30, 36, 39, 42, 33, 30, 22, 20],
      backgroundColor: 'rgb(75, 192, 192)',
    },
  ],
};

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

const StackedBar = () => (
  <>
    <div className="header">
      <h1 className="title">Past 14 Days Chart</h1>
    </div>
    <Bar data={data} options={options} />
  </>
);

export default StackedBar;
