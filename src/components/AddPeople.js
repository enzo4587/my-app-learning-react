import { Component } from 'react';

class AddPeople extends Component {
    state = {
        name: null,
        age: null,
        gender: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor="name">Name:</label><br />
                    <input type="text" id="name" onChange={this.handleChange} /><br />
                    <label htmlFor="age">Age:</label><br />
                    <input type="age" id="age" onChange={this.handleChange} /><br />
                    <label htmlFor="gender">Gender:</label><br />
                    <input type="gender" id="gender" onChange={this.handleChange} /><br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddPeople