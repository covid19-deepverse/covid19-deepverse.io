import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const LineChart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);
  const fetchdaily = async () => {
    try {
      const data = await axios.get('/daily');

      console.log(data.data);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchdaily());
    };
    fetchAPI();
  }, [setDailyData]);

  //  console.log('here'+dailyData)

  const data = {
    labels: dailyData.map(({ date }) => date),
    datasets: [
      {
        data: dailyData.map(({ confirmed }) => confirmed),
        label: 'Confirmed',
        //fill: false,
        borderColor: ['rgba(234, 87, 113, 1)'],
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        pointBackgroundColor: 'rgba(234, 87, 113, 1)',
        pointBorderColor: 'rgba(234, 87, 113, 1)',
      },
      {
        label: 'Deaths',
        //fill: false,
        data: dailyData.map(({ deaths }) => deaths),
        borderColor: ['rgba(210, 45, 54, 1)'],
        backgroundColor: ['rgba(231, 57, 73, 0.2)'],
        pointBackgroundColor: 'rgba(210, 45, 54, 1)',
        pointBorderColor: 'rgba(210, 45, 54, 1)',
      },
    ],
  };
  return (
    <>
      <h1 className="title">Infections History</h1>
      <Line data={data} />
    </>
  );
};

export default LineChart;
