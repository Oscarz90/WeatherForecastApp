/* eslint-disable */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WeatherIconProvider from '@/components/WeatherIconProvider';

/**
 * TODO: 
 * - Implement default value for all props
 */
export default class CardWeather extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    const { 
      day
      , tempMin
      , tempMax
      , tempScale 
    } = this.props;
  
    return(
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center">
        <Typography variant="subtitle1" style={{ color: '#B7B7B7', textAlign: 'center'}}>
          { day }
        </Typography>
        <Grid style={{ padding: "0.5em" }}>
          <WeatherIconProvider dayIcon="50d.png" auto/>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="stretch">
          <Typography variant="body1" style={{ color: '#B7B7B7', textAlign: 'center'}}>
            {`${tempMax} °${tempScale}`}
          </Typography>
          <Typography variant="body1" style={{ color: '#D7D7D7', textAlign: 'center'}}>
            {`${tempMin} °${tempScale}`}
          </Typography>
        </Grid>
      </Grid>
    )
  }
}