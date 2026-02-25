import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const LineChart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const { data } = await axios.get(
          'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
        );
        const transformed = Object.keys(data.cases).map((date) => ({
          date,
          confirmed: data.cases[date],
          deaths: data.deaths[date],
        }));
        setDailyData(transformed);
      } catch (error) {
        console.error('Failed to fetch historical data:', error);
      }
    };
    fetchAPI();
  }, []);

  const chartData = {
    labels: dailyData.map(({ date }) => date),
    datasets: [
      {
        data: dailyData.map(({ confirmed }) => confirmed),
        label: 'Confirmed',
        borderColor: ['rgba(234, 87, 113, 1)'],
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        pointBackgroundColor: 'rgba(234, 87, 113, 1)',
        pointBorderColor: 'rgba(234, 87, 113, 1)',
      },
      {
        label: 'Deaths',
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
      <Line data={chartData} />
    </>
  );
};

export default LineChart;
