const Country = ({ country }) => {

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
      <img src={country.flags.svg} alt="Country flag"></img>
    </div>
  );
};

export default Country

{/* country ? country.name.common : ""} */}
