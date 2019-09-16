import React from 'react';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SearchWeatherInput from '@/containers/WeatherForecast/components/SearchWeatherInput';
import SearchWeatherIcon from '@/containers/WeatherForecast/components/SearchWeatherIcon';
import NotFoundWeatherCityIcon from '@/containers/WeatherForecast/components/NotFoundWeatherCityIcon';
import WeatherCard from '@/components/WeatherCard';
import WeatherSmallCard from '@/components/WeatherSmallCard';
import WeatherForecastService from '@/services/WeatherForecast';

/**
 * Weather Forecast Container
 * Search and show the weather forecast for a given city
 * 
 * @extends React.Component
 */
export default class WeatherForecast extends React.Component{

  state= {
    Weather: {
      today: undefined
      , forecast: undefined
      , city: undefined
      , notFound: false
    }
    , searchInput: undefined
  }
  
  setStateAsync= async (state) => new Promise((resolve)=>{ this.setState(state, resolve) })
  
  get5DaysWeatherForecast(data){
    try{
      const daySet= new Set();
      return data.reduce((days, item)=>{
        const day= moment.utc(item.dt_txt).local().format("YYYY-MM-DD")
        if(!daySet.has(day)){
          daySet.add(day)
          days.push({
            ...item
            , datetimeLocal: day
          })
        }
        return days
      }, [])
      .slice(0, 5)
    }catch(error){
      console.error(error)
    }
  }

  formatDayData(day){
    return {
      day: moment(day.datetimeLocal).format("dddd")
      , icon: `${day.weather[0].icon}.svg`
      , weatherDescription: day.weather[0].description
      , tempMin: day.main.temp_min
      , tempMax: day.main.temp_max
      , tempScale: "F"
    }
  }

  getWeatherForecast= async ()=>{
    try{
      const { searchInput }= this.state;
      if(!!searchInput){
        const { data, status} = await WeatherForecastService.get5day(searchInput);
        
        // Status OK
        if(status === 200){
          const firstFiveDays= this.get5DaysWeatherForecast(data.list, data.city.timezone)
          const firstFiveDaysFormatted= firstFiveDays.map(this.formatDayData);
          const today= firstFiveDaysFormatted.slice(0,1)[0];
          const forecast= firstFiveDaysFormatted.slice(1);
        
          await this.setStateAsync({
            Weather: {
              today
              , forecast
              , city: data.city.name
            }
          })
          return;
        }

        // Not Found State
        if(status === 404){
          await this.setStateAsync({
            Weather: {
              today: undefined
              , forecast: undefined
              , city: undefined
              , notFound: true
            }
          })
          return;
        }

      }
    }catch(error){
      console.error(error)
    }
  }

  onSearchInputChange= async (e)=>{
    try{
      const { target: { value }}= e;
      await this.setStateAsync({
        searchInput: value
      })
    }catch(error){
      console.error(error)
    }
  }

  render(){
    const { Weather: { today, forecast, city, notFound } }= this.state;

    return(
      <Grid 
        container 
        spacing= {5}
        direction= "column"
        justify= "center"
        alignItems= "stretch">  
        <Grid item xs={12}>
          <Typography 
            variant= "h4" 
            style= {styles.title}>
            Weather Forecast {!!today && `for ${city}`}
          </Typography>
        </Grid>
        <SearchWeatherInput 
          label= "Search your city"
          onClick= {this.getWeatherForecast}
          onChange= {this.onSearchInputChange}
          containerStyle= {styles.searchInput}
        />  
        { !!today && !notFound && 
          <WeatherCard
            day= {today.day}
            icon= {today.icon}
            weatherDescription= {today.weatherDescription}
            tempMin= {today.tempMin}
            tempMax= {today.tempMax}
            tempScale= {today.tempScale}
          />
        }
        { !today && !notFound && 
          <SearchWeatherIcon/>
        }
        { !today && notFound && 
          <NotFoundWeatherCityIcon/>
        }
        { !!forecast && forecast.length && 
          <Grid item xs={12}>
            <Grid container spacing={0}>
              {forecast.map((item, index)=>(
                <Grid item xs={3} key={index}>
                  <WeatherSmallCard
                    day= {item.day}
                    icon= {item.icon}
                    tempMin= {item.tempMin}
                    tempMax= {item.tempMax}
                    tempScale= {item.tempScale}
                  />
                </Grid>  
              ))}
            </Grid>
          </Grid>
        }
      </Grid>
    )
  }
}

const styles= {
  title: { 
    textAlign: 'center'
    , color: '#939393'
  }
  , searchInput: {
    marginBottom: '2em'
  }
}