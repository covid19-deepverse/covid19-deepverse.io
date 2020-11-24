import React from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import { Scale } from 'styled-loaders-react';

export default class CardValue extends React.Component {
  state = {
    con: null,
    re: null,
    de: null,
    la: null,
  };

  async componentDidMount() {
    const fetchdata = await axios.get('/getCountry');
    const modify = {
      confirmed: fetchdata.data.confirmed.value,
      recovered: fetchdata.data.recovered.value,
      deaths: fetchdata.data.deaths.value,
    };
    // console.log(modify);
    this.setState({ con: fetchdata.data.confirmed.value });
    this.setState({ re: fetchdata.data.recovered.value });

    this.setState({ de: fetchdata.data.deaths.value });
    this.setState({ la: fetchdata.data.lastUpdate });

    // console.log("Card"+this.state.data.confirmed)
  }
  componentWillUnmount(){
    window.removeEventListener('resize',this.resizeLisener)
  }
  render() {
    const { con, re, de, la } = this.state;

    return (
      <>
        <div className="app_left-bottom">
          <h1 className="app_left-bottom-title">WORLD</h1>
          <div className="table-total">
            <p className="table-total-title">TOTAL CONFIRMED</p>
            <p className="table-total-cases">
              <CountUp start={0} end={con} duration={2.5} separator="," />{' '}
            </p>
          </div>
          <div className="table-total">
            <p className="table-total-title">TOTAL RECOVERED</p>
            <p className="table-total-cases">
              <CountUp start={0} end={re} duration={2.5} separator="," />{' '}
            </p>
          </div>
          <div className="table-total">
            <p className="table-total-title">TOTAL DEATHS</p>
            <p className="table-total-cases">
              <CountUp start={0} end={de} duration={2.5} separator="," />{' '}
            </p>
          </div>


          {/* <div className="loading-data"> */}
            {/* <div className="loading-data-gif">

              <Scale color="#50E3C2" size="20px" duration="3s" />
            </div> 

            <p className="loading-data-title">
              LAST UPDATED :{new Date(la).toDateString()}{' '}

            </p> */}
          {/* </div> */}

        </div>
      </>
    );
  }
}
