import React from 'react';
import PropTypes from 'prop-types';
import WeatherIconsMap from '@/configuration/constants/WeatherIconsMap';

/**
 * 
 * Component to provide the icon for the given 
 * 
 * @property {boolean} auto - The property to auto size the image to its parent container
 * @property {string} dayIcon - The icon name 
 * 
 */
export default class WeatherIconProvider extends React.Component{

  getDayIconName(dayIcon){
    const dayWithoutExtension= dayIcon.split(".")[0];
    if(!!dayIcon && !!WeatherIconsMap[dayWithoutExtension]){
      return WeatherIconsMap[dayWithoutExtension].uri.svg
    }
    return "";
  }

  render(){
    const { auto, dayIcon }= this.props;
    const icon= this.getDayIconName(dayIcon);
    
    return(
      <img 
        src= {icon} 
        style= {!!auto? styles.auto : styles.fixed}
        alt= "logo"
      />
    )
  }

}

const styles= {
  fixed: {
    height: "30vmin"
  }
  , auto: {
    width: "100%"
    , height: "auto"
  }
}

WeatherIconProvider.propTypes= {
  dayIcon: PropTypes.string
  , auto: PropTypes.bool
}

WeatherIconProvider.defaultProps = {
  auto: false
  , dayIcon: ''
};