import React from 'react';
import Navigation from './Navigation';
import { IndexLink } from 'react-router';

export default class Counter extends React.Component {
    render() {
        return (
            <div>
                <p>This page does not exist!</p>
                <p><IndexLink to="/">Go home</IndexLink></p>
            </div>
        );
    }
}