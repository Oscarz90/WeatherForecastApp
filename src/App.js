import React from 'react';
import WeatherForecast from './containers/WeatherForecast';
import Container from '@material-ui/core/Container';

/**
 * 
 * Main App Container
 * 
 * @extends React.Component
 */
export default class App extends React.Component{

  render(){
    return (
      <Container 
        maxWidth="sm" 
        style={styles.container}>  
        <WeatherForecast/>
      </Container>
    );
  }
}

const styles= {
  container: {
    paddingTop: 18
  }
}