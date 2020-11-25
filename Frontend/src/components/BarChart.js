import React from 'react';
import { Bar } from 'react-chartjs-2';
const BarChart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const Data = {
    labels: ['Countries cases distribution'],
    datasets: [
      {
        label: 'Infected',
        backgroundColor: ['rgba(234, 87, 113, 1)',],
        data: [confirmed.value],
      },
      {
        label: 'Recovered',
        backgroundColor: ['rgba(80, 227, 194, 1)',],
        data: [recovered.value],
      },
      {
        label: 'Deaths',
        backgroundColor: ['rgba(210, 45, 54, 1)',],
        data: [deaths.value],
      },
    ],
  };

  return (
    <>
      <Bar
        data={Data}
        option={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    </>
  );
};
export default BarChart;
