import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WeatherIconProvider from '@/components/WeatherIconProvider';

/**
 * 
 * Card to show the weather day info for a given city
 * 
 * @property {string} day - The week day
 * 
 * @property {string} weatherDescription - The description of the weather state for the given day
 * 
 * @property {number} tempMin - The minimum temperature for the given day
 * 
 * @property {number} tempMax - The minimum temperature for the given day
 * 
 * @property {string} tempScale - The temperature scale for the given temperature
 * 
 * @property {string} icon - The icon of the weather status
 * 
 */
export default class WeatherCard extends React.Component{

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
        <Typography 
          variant="h5" 
          style= {styles.weatherDay}>
          {day}
        </Typography>
        <WeatherIconProvider dayIcon={icon}/>
        <Typography 
          variant="h4" 
          style= {styles.weatherDescription}>
          {weatherDescription}
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch">
          <Typography 
            variant="h5" 
            style= {styles.maxTemp}>
            {`${tempMax} °${tempScale}`}
          </Typography>
          <Typography 
            variant="h5" 
            style= {styles.minTemp}>
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
  , weatherDescription: { 
    color: '#B7B7B7'
    , textAlign: 'center'
  }
  , minTemp: { 
    color: '#D7D7D7'
    , textAlign: 'center'
    , paddingLeft: '0.3em'
  }
  , maxTemp: {
    color: '#B7B7B7'
    , textAlign: 'center'
    , paddingRight: '0.3em'
  }
}

WeatherCard.propTypes= {
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

WeatherCard.defaultProps = {
  day: ''
  , weatherDescription: ''
  , tempMin: ''
  , tempMax: ''
  , tempScale: ''
  , icon: ''
};