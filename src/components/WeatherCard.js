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
      , weatherDescription
      , tempMin
      , tempMax
      , tempScale 
      , icon
    } = this.props;
  
    return(
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch">
        <Typography variant="h5" style={{ color: '#B7B7B7', textAlign: 'center'}}>
          { day }
        </Typography>
        <WeatherIconProvider dayIcon={icon}/>
        <Typography variant="h4" style={{ color: '#B7B7B7', textAlign: 'center'}}>
          { weatherDescription }
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch">
          <Typography variant="h5" style={{ color: '#B7B7B7', textAlign: 'center', paddingRight: '0.3em'}}>
            {`${tempMax} °${tempScale}`}
          </Typography>
          <Typography variant="h5" style={{ color: '#D7D7D7', textAlign: 'center', paddingLeft: '0.3em'}}>
            {`${tempMin} °${tempScale}`}
          </Typography>
        </Grid>
      </Grid>
    )
  }
}