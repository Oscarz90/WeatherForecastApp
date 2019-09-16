import React from 'react';

/**
 * 
 * Search icon used as default icon for the weather forecast main app
 * 
 * @extends React.Component
 * 
 */
export default class SearchWeatherIcon extends React.Component{
  
  render(){
    return(
      <img 
        src= {require('@/assets/img/not-found-icon.svg')} 
        style= {styles.fixed}
        alt= "NotFoundLogo"
      />
    )
  }

}

const styles= {
  fixed: {
    height: "30vmin"
  }
}