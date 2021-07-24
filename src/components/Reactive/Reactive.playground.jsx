import React from 'react';
import * as Rx from 'rxjs';

function* fibonacci() {
    var fn1 = 1;
    var fn2 = 1;
    while (1) {
        var current = fn2;
        fn2 = fn1;
        fn1 = fn1 + current;
        yield current;
    }
}

export default class ReactivePlayground extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.state = { store: Rx.Observable.from(fibonacci()).take(5) };
        var sub = this.state.store.subscribe(
            value => console.log(value),
            error => console.error(error),
            () => console.info('completed')
        )
    }

    render() {
        return (
            <div>                
                <p>Playground</p>
            </div>
        );
    }
}