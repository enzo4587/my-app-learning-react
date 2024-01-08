// Outputting lists using class component.
import { Component } from 'react';


class People extends Component {
    state = {
        people: [
            { name: "John", age: 22, id: 1 },
            { name: "Enzo", age: 21, id: 2 },
            { name: "Barbra", age: 22, id: 3 },
            { name: "Samantha", age: 22, id: 4 }
        ]
    }
    render() {
        const { people } = this.state;
        const peopleList = people.map(people => {
            return (
                <div key = { people.id }>
                    <li>{ people.name } is {people.age} years.</li>
                </div>
            )
        })

        return (
            <div>
                <h1>List of some random people and there ages:</h1>
                {peopleList}
            </div>
        )
    }
}

export default People