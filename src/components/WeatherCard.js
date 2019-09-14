/* eslint-disable */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WeatherIconProvider from '@/components/WeatherIconProvider.js'


export default class CardWeather extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch">
        <Typography variant="h5" style={{ color: '#B7B7B7', textAlign: 'center'}}>
          Monday
        </Typography>
        <WeatherIconProvider/>
      </Grid>
    )
  }
}