import {useState, useEffect} from 'react'
import axios from 'axios'


const Country = ({ country }) => {

  const [weather, setWeather] = useState({});



  useEffect (() => {
    console.log('Weatherworking')
    console.log('country.capital', country.capital)
    const params = {
      q:country.capital[0],
      APPID: import.meta.env.VITE_APP_API_KEY
      
    }
// console.log(import.meta.env.VITE_APP_API_KEY)
console.log(params)
    axios
    .get('https://api.openweathermap.org/data/2.5/weather?', {params})
    .then(response =>
      {
        
        console.log("weather promise fulfilled")
        setWeather(response.data)
        console.log('weather response', response.data)
      }
     )
  }, [])


  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital : {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Area : {country.area}</p>
      <h2>Languages</h2>
        <ul> {Object.values(country.languages).map((language) =>
      <li key={language}>{language}</li>)}
      </ul>
      <img src={country.flags.png} alt="Country flag"></img>
      <h2>Weather in {country.capital}</h2>
      <p>Temperature : {weather.main.temp ? weather.main.temp : ''} °F</p>
    </div>
  );
};

export default Country


