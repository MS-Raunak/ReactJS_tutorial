import React from 'react'

function Example1() {
    const countriesWithCities = [
        {
          country: "USA",
          cities: ["New York", "Los Angeles", "Chicago"],
        },
        {
          country: "Canada",
          cities: ["Toronto", "Vancouver", "Montreal"],
        },
        {
          country: "UK",
          cities: ["London", "Manchester", "Birmingham"],
        },
      ];
    
  return (
    <div>
       <h2>Nested Map</h2>
       <h2>Exampl-2</h2>
      <ul>
        {
            countriesWithCities.map((countryObj, index) => (
                <li key={index}>
                    <strong>{countryObj.country}</strong>
                    <ol>
                        {
                            countryObj.cities.map((city, index) => (
                                <li key={index}>{city}</li>
                            ))
                        }
                    </ol>
                </li>
            ))
        }
        </ul>
    </div>
  )
}

export default Example1
