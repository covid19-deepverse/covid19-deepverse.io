import React from 'react'
import axios from "axios";
import CountUp from 'react-countup'
import {Card,CardContent,Typography,Grid} from '@material-ui/core';

export default class CardValue extends React.Component  {
state={
    con:null,re:null,de:null
    ,la:null

}

async componentDidMount(){
    const fetchdata=await axios.get('/getCountry')
    const modify={
      confirmed:fetchdata.data.confirmed.value,
      recovered:fetchdata.data.recovered.value,
      deaths:fetchdata.data.deaths.value,
        }
        // console.log(modify)
     this.setState({con:fetchdata.data.confirmed.value});
     this.setState({re:fetchdata.data.recovered.value});

     this.setState({de:fetchdata.data.deaths.value});
     this.setState({la:fetchdata.data.lastUpdate});


    // console.log("Card"+this.state.data.confirmed)
}

render(){
    const {  con,re,de,la } = this.state;

    return(

        <div className="app_left-bottom">
          <h1 className="app_left-bottom-title">WORLD</h1>
          <CardContent>
                        <Typography color="textSecondary" gutterBottom>TOTAL CONFIRMED </Typography>
                        <Typography variant="h5"><CountUp start={0} end={con} duration={2.5} separator=','/> </Typography>
                   
                       
           </CardContent>
           <CardContent>
                        <Typography color="textSecondary" gutterBottom>TOTAL RECOVERED </Typography>
                        <Typography variant="h5"><CountUp start={0} end={re} duration={2.5} separator=','/> </Typography>
                   
                       
           </CardContent>
           <CardContent>
                        <Typography color="textSecondary" gutterBottom>TOTAL DEATHS </Typography>
                        <Typography variant="h5"><CountUp start={0} end={de} duration={2.5} separator=','/> </Typography>
                        <Typography color="textSecondary" gutterBottom>lastUpdate </Typography>

                        <Typography color="textSecondary" >{new Date (la).toDateString()} </Typography>
                       
           </CardContent>
          
      </div>
    )
}

}
