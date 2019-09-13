/* eslint-disable */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import imageForecast from './assets/img/test.svg'
import WeatherForecast from './containers/weather-forecast';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

class App extends React.Component{

  render(){
    return (
      <Container maxWidth="sm" style={{ paddingTop: 18 }}>
          <form>
            <Grid container spacing={3}>  
              <Grid item xs={12}>
                <Typography variant="h4" style={{ textAlign: 'center', color: '#939393'}}>
                  Weather Forecast
                </Typography>
              </Grid>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="stretch">
                <Typography variant="h5" style={{ color: '#B7B7B7', textAlign: 'center'}}>
                  Monday
                </Typography>
                <img src={imageForecast} alt="logo" style={{ height: '30vmin'}}/>
                <Typography variant="h4" style={{ color: '#B7B7B7', textAlign: 'center'}}>
                  Party cloud
                </Typography>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="stretch">
                  <Typography variant="h5" style={{ color: '#B7B7B7', textAlign: 'center', paddingRight: '0.5em' }}>
                    79°
                  </Typography>
                  <Typography variant="h5" style={{ color: '#B7B7B7', textAlign: 'center', paddingLeft: '0.5em'}}>
                    80°
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={3}>
                    <h6>hello madafaker!</h6>
                  </Grid>
                  <Grid item xs={3}>
                    <h6>hello madafaker!</h6>
                  </Grid>
                  <Grid item xs={3}>
                    <h6>hello madafaker!</h6>
                  </Grid>
                  <Grid item xs={3}>
                    <h6>hello madafaker!</h6>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Divider/>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-full-width"
                  label="Find your city"
                  placeholder="Placeholder"
                  helperText="Type your city's name"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </form>
      </Container>
    );
  }
}

export default App;

/*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        <div>
          <WeatherForecast/>
        </div>
        </header>
    </div>*/
