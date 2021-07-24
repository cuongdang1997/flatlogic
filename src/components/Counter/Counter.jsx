import React from 'react';

export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = { count: 0 };
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }

    square() {
        this.setState({
            count: this.state.count ** 2
        })
    }

    expose() {
        this.setState({
            count: this.state.count ** this.state.count
        })
    }

    render() {
        return (
            <div>                
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.increment()}>Increment +1</button>
                <button onClick={() => this.square()}>Square</button>
                <button onClick={() => this.expose()}>Expose</button>
            </div>
        );
    }
}