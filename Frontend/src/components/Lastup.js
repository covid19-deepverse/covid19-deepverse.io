import React from 'react';
import axios from 'axios';


export default class Lastup extends React.Component {
  state = {
  
    la: null,
  };

  async componentDidMount() {
    const fetchdata = await axios.get('/getCountry');
 
    this.setState({ la: fetchdata.data.lastUpdate });

    // console.log("Card"+this.state.data.confirmed)
  }

  render() {
    const {  la } = this.state;

    return (
      <>
        <p className="loading-data-title">LAST UPDATED : {new Date(la).toDateString()}</p>

      </>
    );
  }
}
