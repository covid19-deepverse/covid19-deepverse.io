import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import axios from 'axios';

import { Animation } from '@devexpress/dx-react-chart';

// const data = [
//   { region: 'Asia', val: 4119626293 },
//   { region: 'Africa', val: 1012956064 },
//   { region: 'Northern America', val: 344124520 },
//   { region: 'Latin America and the Caribbean', val: 590946440 },
//   { region: 'Europe', val: 727082222 },
//   { region: 'Oceania', val: 35104756 },
// ];


export default class DonutChart extends React.PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data,
//     };
//   }
    state={
        DataforDonut:[]
    }

  async componentDidMount(){
      try {
        const fetchdata=await axios.get('/getCountry/Thailand')
        // this.setState({data:fetchdata.data});
        console.log(fetchdata.data.confirmed.value)
        console.log(fetchdata.data.recovered.value)
    
        console.log(fetchdata.data.deaths.value)
    
        const dataset=[
            
                {Type:"confirmed",val:fetchdata.data.confirmed.value},
                {Type:"recovered",val:fetchdata.data.recovered.value},
                {Type:"deaths",val:fetchdata.data.deaths.value},
        
    ]

    console.log(dataset)
    this.setState({DataforDonut:dataset})
      } catch (error) {
          
      }
    
    // this.setState({data:dataset})
     
  }

  render() {
    const { DataforDonut: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="val"
            argumentField="Type"
            innerRadius={0.6}
          />
          <Title
            text="The World Infection Rate"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
