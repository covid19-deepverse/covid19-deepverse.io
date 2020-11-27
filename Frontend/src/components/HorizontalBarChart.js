import React from 'react';
import { HorizontalBar } from '@reactchartjs/react-chart.js';

import axios from 'axios';


class HorizontalBarChart extends React.Component {

  state = {
    DataforHorizontal: [],
  };
  async componentDidMount() {
    try {
      const fetchdataIran = await axios.get('/getCountry/Iran');
      const fetchdataIndonesia = await axios.get('/getCountry/Indonesia');
      const fetchdataJapan = await axios.get('/getCountry/Japan');
      const fetchdataChina = await axios.get('/getCountry/China');
      const fetchdataSingapore = await axios.get('/getCountry/Singapore');
      const fetchdataKorea = await axios.get('/getCountry/Korea, South');
      const fetchdataThai = await axios.get('/getCountry/Thailand');

      // this.setState({data:fetchdata.data});
   

      const dataset = [
        fetchdataIran.data.confirmed.value ,
        fetchdataIndonesia.data.confirmed.value ,
        fetchdataJapan.data.confirmed.value ,
        fetchdataChina.data.confirmed.value ,
        fetchdataSingapore.data.confirmed.value ,
        fetchdataKorea.data.confirmed.value ,
        fetchdataThai.data.confirmed.value ,
      ];

      // console.log(dataset);
      this.setState({ DataforHorizontal: dataset });
    } catch (error) {}
  }
  render(){
    const { DataforHorizontal } = this.state;

    const data = {
      labels: [
        'Iran',
        'Indonesia',
        'Japan',
        'China',
        'Singapore',
        'South Korea',
        'Thailand',
      ],
      datasets: [
        {
          label: 'Comfirmed value',
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
    return(
      <>
    <div className="header">
      <h1 className="title">Confirmed cases by Country in ASIA</h1>
    </div>
    <HorizontalBar data={data} options={options} />
  </>
    )
  }
  
}

export default HorizontalBarChart;
