import axios from "axios";

/**
 * Configure the base path of the api
 */
const HTTP = axios.create({
  baseURL : `http://api.openweathermap.org/data/2.5/`
  , validateStatus: function (status) {
    return status >= 200 && status <= 503;
}
});
/**
 * API KEY
 * TODO: create env files
 */
const key= 'APPID=8c8ffe30371425f988c7c523cefa16ca';

/**
 * Adding request interceptor to attach the key to all the requests
 */
HTTP.interceptors.request.use(function (config) {
  const { url } = config;
  // fahrenheit
  config.url= `${url}&units=imperial&${key}`
  // centigrade
  //config.url= `${url}&units=metric&${key}`
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default HTTP;