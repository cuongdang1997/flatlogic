import React from 'react';
import Navigation from './../Navigation/Navigation';
import styles from './../../styles/styles.scss';

export default class Home extends React.Component {

    componentDidMount() {
        let cat = new Cat('yo');
        console.log(cat.name);

        try {
            cat.meow = function () { console.log('hohoh') };
        } catch (e) {
            console.error('throws an error because of the "readonly" decorator');
        }

        console.log("Cat is supercat: " + Cat.isSupercat);
    }

    render() {
        return (
            <div>
                <Navigation></Navigation>                
                <div className={styles.routerOutlet}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

// some decorators
function supercat(target) {
    target.isSupercat = true;
    target.power = 'flight';
}

function readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

@supercat
class Cat {
    constructor(name) {
        this.name = name;
    }
    @readonly
    meow() {
        return 'yo';
    }
}