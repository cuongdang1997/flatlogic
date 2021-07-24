import React from 'react';
import { Link } from 'react-router';
import styles from './Navigation.scss';

export default React.createClass({
    render() {
        return <Link {...this.props} activeClassName={styles.active}/>                   
    }
})