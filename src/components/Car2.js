// using a ternary operator in  a stateless or functional component

import React from 'react'

const Car2 = () => {
    const cars = [
        { brand: 'Toyota', model: 'Camry', year: 2020 },
        { brand: 'Honda', model: 'Civic', year: 2019 },
        { brand: 'Ford', model: 'Mustang', year: 2022 },
        { brand: 'Chevrolet', model: 'Malibu', year: 2021 }
    ]

    const filteredCars = cars.filter( car => car.year > 2020)

    const filteredCarsList = filteredCars.length > 0 ? (
        <div>
            <ul>
                {filteredCars.map(car => (
                    <li key = {car.brand}>
                        {car.brand} {car.year} - {car.model}
                    </li>
                ))}
            </ul>
        </div>
    ): (
        <div>
            <p>No cars found</p>
        </div>
    );
  return (
    <div>
        <h2>Filtered Cars List</h2>
        {filteredCarsList}
    </div>
  )
}

export default Car2