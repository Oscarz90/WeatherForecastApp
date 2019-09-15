import axios from "axios";

const HTTP = axios.create({
  baseURL : `http://api.openweathermap.org/data/2.5/`
})

//TODO: create env files
const key= 'APPID=8c8ffe30371425f988c7c523cefa16ca';

HTTP.interceptors.request.use(function (config) {
  console.log(config)
  const { url } = config;
  config.url= `${url}&${key}`
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});



export default HTTP;