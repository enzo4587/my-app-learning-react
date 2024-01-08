import { Component } from 'react';

class Artist extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Music</h1>
                <p>List of Some artists whose music i listen to:</p>
                <ul>
                    <li>{ this.props.artist1 }</li>
                    <li>{ this.props.artist2 }</li>
                    <li>{ this.props.artist3 }</li>
                </ul>
            </div>
        )
    }
}

export default Artist