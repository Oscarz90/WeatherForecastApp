/* eslint-disable */
import React from 'react';
import IconsMap from '@/configuration/constants/WeatherIconsMap';

export default class WeatherIconProvider extends React.Component{
  
  constructor(props){
    super(props)
    const { dayIcon }= this.props;
    
    //TODO: set a default icon
    let icon;

    if(!!this.props.dayIcon){
      const dayWithoutExtension= dayIcon.split(".")[0];
      
      if(IconsMap[dayWithoutExtension])
        icon= IconsMap[dayWithoutExtension].uri.svg
    }
    
    //Set the state
    this.state= {
      dayIcon: icon
    }
    
  }

  render(){
    const { dayIcon }= this.state;
    const { auto }= this.props;
    //const file= `@/assets/img/${dayIcon}`
    return(
      <img 
        src= {dayIcon} 
        style= { !!auto? styles.auto : styles.fixed}
        alt= "logo"
      />
    )
  }

}

//
const styles= {
  fixed: {
    height: "30vmin"
  }
  , auto: {
    width: "100%"
    , height: "auto"
  }
}