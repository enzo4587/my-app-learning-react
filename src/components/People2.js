// Using a Ternary operator in  a class component

import { Component } from 'react';

class People2 extends Component {
    state = {
        people2: [
            { name: "John", age: 22, id: 1 },
            { name: "Enzo", age: 21, id: 2 },
            { name: "Barbra", age: 22, id: 3 },
            { name: "Samantha", age: 22, id: 4 }
        ]
    }
    render() {
        const peopleAbove21 = this.state.people2.filter(person => person.age > 21)

        const displayMessage = peopleAbove21.length > 0 ? (
            <div>
                <ul>
                    {peopleAbove21.map( person => (
                        <li key = { person.age }>
                            { person.name } - { person.age } years old
                        </li>
                    ))}
                </ul>
            </div>
        ) : (
            <p>No individuals over the age of 21.</p>
        );

        return (
            <div>
                <h1>People above 21:</h1>
                { displayMessage }
            </div>
        )
    }
}

export default People2
