import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WeatherIconProvider from '@/components/WeatherIconProvider';

/**
 * Card to show the weather day info for a given city
 * 
 * @property {string} day - The week day
 * 
 * @property {number} tempMin - The minimum temperature for the given day
 * 
 * @property {number} tempMax - The minimum temperature for the given day
 * 
 * @property {string} tempScale - The temperature scale for the given temperature
 * 
 * @property {string} icon - The icon of the weather status
 */
export default class WeatherSmallCard extends React.Component{

  render(){
    const { 
      day
      , icon
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
        <Typography 
          variant="subtitle1" 
          style={styles.weatherDay}>
          {day}
        </Typography>
        <Grid style={styles.weatherIconContainer}>
          <WeatherIconProvider 
            dayIcon= {icon} 
            auto/>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="stretch">
          <Typography 
            variant="body1" 
            style= {styles.maxTemp}>
            {`${tempMax} °${tempScale}`}
          </Typography>
          <Typography 
            variant="body1" 
            style={styles.minTemp}>
            {`${tempMin} °${tempScale}`}
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

const styles= {
  weatherDay: { 
    color: '#B7B7B7'
    , textAlign: 'center'
  }
  , weatherIconContainer: { 
    padding: "0.5em" 
  }
  , minTemp: { 
    color: '#D7D7D7'
    , textAlign: 'center'
  }
  , maxTemp: { 
    color: '#B7B7B7'
    , textAlign: 'center'}
}

WeatherSmallCard.propTypes= {
  day: PropTypes.string
  , weatherDescription: PropTypes.string
  , tempMin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
  , tempMax: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
  , tempScale: PropTypes.string
  , icon: PropTypes.string
}

WeatherSmallCard.defaultProps = {
  day: ''
  , weatherDescription: ''
  , tempMin: ''
  , tempMax: ''
  , tempScale: ''
  , icon: ''
};