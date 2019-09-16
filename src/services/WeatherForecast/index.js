import HTTP from '@/configuration/http-common';

/**
 * Obtaines the weather forecast for the given city
 * 
 * @param {string} city - The city's name to get its weather forecast
 * 
 */
async function get5day(city){
  try{
    return await HTTP.get(`forecast?q=${city}`)    
  }catch(error){
    console.log(error)
    throw error;
  }
}

export default {
  get5day
}