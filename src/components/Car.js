// Outputting a list of cars using stateless or functional component
import React from 'react'

const Car = () => {
    const cars = [
        { brand: 'Toyota', model: 'Camry', year: 2020 },
        { brand: 'Honda', model: 'Civic', year: 2019 },
        { brand: 'Ford', model: 'Mustang', year: 2022 },
        { brand: 'Chevrolet', model: 'Malibu', year: 2021 }
    ]

    const carList = cars.map(({brand, model, year}, index)=>(
      <div key={index}>
        <h3>{`brand: ${ brand } model: ${ model }`}</h3>
        <p>{`year: ${ year }`}</p>
      </div>
    ))
  return (
    <div>
      <h2>Car List</h2>
      {carList}
    </div>
  )
}

export default Car