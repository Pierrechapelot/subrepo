import { useState, useEffect } from 'react'
import axios from 'axios'
import Content from './components/Content'
import Filter from './components/Filter'

function App() {

  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [newFilter, setNewFilter] = useState('');


  useEffect(() => {
    console.log('effect working')
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => 
      {
        console.log("promise fulfilled")
        setAllCountries(response.data)
        console.log('all countries', response.data)
      })
  }, [])
  console.log('render', allCountries.length, 'countries')

  
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    console.log('newfilter',event.target.value)
      const regex = new RegExp(event.target.value, 'i')
      const filteredCountries = allCountries.filter(country =>
        country.name.common.match(regex))

      setCountries(filteredCountries)
      console.log('filteredcountries', filteredCountries.length)
      
  }

  return (
    <div>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <Content countries={countries}/>
    </div>)

}

export default App
