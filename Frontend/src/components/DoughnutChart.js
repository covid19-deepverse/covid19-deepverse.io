import React from 'react';
import { Doughnut } from '@reactchartjs/react-chart.js';
import axios from 'axios';
import { Animation } from '@devexpress/dx-react-chart';

const DoughnutChart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const Data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Doughnut Chart</h1>
      </div>
      <Doughnut data={Data} />
    </>
  );
};
export default DoughnutChart;
