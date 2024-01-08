import { Component } from 'react';

class Games extends Component {
    render() {
        // console.log(this.props)
        const { game1, game2, game3 } = this.props;
        return (
            <div>
                <h1>Games</h1>
                <p>This is a list of games that I have played:</p>
                <ul>
                    <li>{ game1 }</li>
                    <li>{ game2}</li>
                    <li>{ game3 }</li>
                </ul>
            </div>
        )
    }
}

export default Games