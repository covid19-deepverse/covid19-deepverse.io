import React from 'react';
import { Pie } from '@reactchartjs/react-chart.js';
import axios from 'axios';


export default class PieChart extends React.Component {
  state = {
    DataforDonut: [],
  };
  async componentDidMount() {
    try {
      const fetchdata = await axios.get('/getCountry');
      // this.setState({data:fetchdata.data});
   

      const dataset = [
      fetchdata.data.confirmed.value ,
       fetchdata.data.recovered.value ,
     fetchdata.data.deaths.value 
      ];

      // console.log(dataset);
      this.setState({ DataforDonut: dataset });
    } catch (error) {}
  }
  render(){
    const { DataforDonut } = this.state;

    const data = {
      labels: ['Confirmed', 'Recovered', 'Deaths'],
      datasets: [
        {
          label: 'Cases',
          data: DataforDonut,
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
    return(
      <>
      <div className="header">
        <h1 className="title">
          Distribution of cases : <strong>World</strong>
        </h1>
      </div>
      <Pie data={data} />
    </>
    )
 
}}


