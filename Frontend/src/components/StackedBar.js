import React from 'react';
import { Bar } from '@reactchartjs/react-chart.js';
import axios from 'axios';


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
class StackedBar extends React.Component{
 state={
   
  Data:[]
 }
  async componentDidMount() {
  console.log("test")
  const fetchdata = await axios.get('/getDaily2');
  this.setState({Data:fetchdata.data.reverse()})
  }

  render(){
    const{Data}=this.state;
    const data = {
      labels: Data.map(({date})=>date),
      datasets: [
        {
          label: 'Confirmed',
          data: Data.map(({confirmed})=>confirmed),
          backgroundColor: 'rgb(255, 99, 132)',
        },
        {
          label: 'Recovered',
          data: Data.map(({recovered})=>recovered),
          backgroundColor: 'rgb(54, 162, 235)',
        },
        {
          label: 'Deaths',
          data: Data.map(({deaths})=>deaths),
          backgroundColor: 'rgb(75, 192, 192)',
        },
      ],
    };
    return(
       <>
    <div className="header">
      <h1 className="title">
        Past 14 Days Chart : <strong>Thailand</strong>
      </h1>
    </div>
    <Bar data={data} options={options} />
  </>
    )
  }
}
// const StackedBar = () => {
// const [Data, setData] = useState([]);
//   const fetchdaily = async () => {
//     try {
//       const data = await axios.get('/getDaily2');

//       console.log(data.data);
//       return data.data;
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     const fetchAPI = async () => {
//       setData(await fetchdaily());
//     };
//     fetchAPI();
//   }, [setData]);

//     return(
//     <>
//       <div className="header">
//         <h1 className="title">Past 14 Days Chart</h1>
//       </div>
//       <Bar data={data} options={options} />
//     </>
//     )
//   };

export default StackedBar;
