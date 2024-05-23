import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'


function App() {

  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  // const [newFilter, setNewFilter] = useState('');


  useEffect(() => {
    console.log('effect working')
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => 
      {setAllCountries(response.data)
        console.log(response.data)
      })
  }, [])
  console.log('render', allCountries.length, 'countries')


  return (
    <div>
      <Country country={allCountries.name}/>
    </div>)

}

export default App
