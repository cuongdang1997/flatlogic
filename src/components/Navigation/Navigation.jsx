import React from 'react';
import NavLink from './NavLink';
import { IndexLink } from 'react-router';
import styles from './Navigation.scss';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router';
import Logged from './Logged';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });

    render() {
        return <div>
            <AppBar
                title="React Webpack Starter"
                onLeftIconButtonTouchTap={this.handleToggle}
                iconElementRight={<Logged />}
                />
            <Drawer
                docked={false}
                width={300}
                open={this.state.open}
                onRequestChange={(open) => this.setState({ open })}
                >
                <MenuItem><NavLink to="/app" onTouchTap={this.handleClose} onlyActiveOnIndex={true}>Start</NavLink></MenuItem>
                <MenuItem><NavLink to="/app/counter" onTouchTap={this.handleClose}>Counter</NavLink></MenuItem>
                <MenuItem><NavLink to="/app/about" onTouchTap={this.handleClose}>About</NavLink></MenuItem>
                <MenuItem><NavLink to="/app/search" onTouchTap={this.handleClose}>Search</NavLink></MenuItem>
                <MenuItem><NavLink to="/app/repos" onTouchTap={this.handleClose}>Repos</NavLink></MenuItem>
                <MenuItem><NavLink to="/app/reactive" onTouchTap={this.handleClose}>Reactive</NavLink></MenuItem>
            </Drawer>
        </div>
    }
}