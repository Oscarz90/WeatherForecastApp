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
import WeatherCard from '@/components/WeatherCard';
import WeatherSmallCard from '@/components/WeatherSmallCard';
import WeatherForecastService from '@/services/weather-forecast';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

class App extends React.Component{

  async componentDidMount(){
    try{
      await this.get5DaysWeatherForecast();
    }catch(error){
      console.error(error)
    }
  }

  async get5DaysWeatherForecast(){
    try{
      const response = await WeatherForecastService.get5day('London');
      const days= []
      const daySet= new Set();
      response.data.list.map(item=>{
        const day= moment(item.dt_txt).format("YYYY-MM-DD")
        if(!daySet.has(day)){
          daySet.add(day)
          days.push(item)
        }
      })
      console.log(days.slice(0,5))
      
    }catch(error){
      console.error(error)
    }
  }

  render(){
    return (
      <Container maxWidth="sm" style={{ paddingTop: 18 }}>  
        <Grid 
          container 
          spacing={5}
          direction="column"
          justify="center"
          alignItems="stretch">  
          <Grid item xs={12}>
            <Typography variant="h4" style={{ textAlign: 'center', color: '#939393'}}>
              Weather Forecast
            </Typography>
          </Grid>
          <WeatherCard
            day="Tuesday"
            icon="02d.png"
            weatherDescription="Party cloud"
            tempMin="46"
            tempMax="76"
            tempScale="F"
          />
          <Grid item xs={12}>
            <Grid container spacing={0}>
              <Grid item xs={3}>
                <WeatherSmallCard
                  day="Tuesday"
                  tempMin="46"
                  tempMax="76"
                  tempScale="F"
                />
              </Grid>
              <Grid item xs={3}>
                <WeatherSmallCard
                  day="Tuesday"
                  tempMin="46"
                  tempMax="76"
                  tempScale="F"
                />
              </Grid>
              <Grid item xs={3}>
                <WeatherSmallCard
                  day="Tuesday"
                  tempMin="46"
                  tempMax="76"
                  tempScale="F"
                />
              </Grid>
              <Grid item xs={3}>
                <WeatherSmallCard
                  day="Tuesday"
                  tempMin="46"
                  tempMax="76"
                  tempScale="F"
                />
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
              error
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Paper style={{ display: 'flex', padding: '0.3em 0.3em', alignItems: 'space-between' }}>
            <InputBase
              placeholder="Search Google Maps"
              inputProps={{ 'aria-label': 'search google maps' }}
              style={{ flex: 1 }}
            />
            <IconButton aria-label="search" onClick={()=>{ console.log("i was pressed") }}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
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
