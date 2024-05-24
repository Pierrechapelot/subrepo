import Country from './Country'

const Content = ({countries}) => {

    if (countries.length > 10) {
        return (
            <p>Too many matches, specify another filter.</p>
        )

    } else if ((countries.length <= 10 && countries.length >=2) || countries.length === 0 ) {
        return (
            <ul>
            {countries.map((country, i)=>
            <li key={i}> {country.name.common}</li>
        )}
        </ul>
        )
    } else {
        return (
            <Country country={countries[0]}/>
        )
    }
}

export default Content