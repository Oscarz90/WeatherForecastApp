import HTTP from '@/configuration/http-common';

async function get5day(city= 'London'){
  try{
    const response= await HTTP.get(`forecast?q=${city}`)    
    console.log('response', response)
    return response
  }catch(error){
    throw error;
  }
}

export default {
  get5day
}