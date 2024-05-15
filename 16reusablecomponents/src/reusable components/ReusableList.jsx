import React from 'react'

function ReusableList({countries}) {
  return (
    <>
      <ul>
        {
            countries.map((country, index) => (
                <li key={index}>{country}</li>
            ))
        }
      </ul>
    </>
  )
}

export default ReusableList
