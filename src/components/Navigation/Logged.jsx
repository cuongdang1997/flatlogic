import React from 'react';
import { Link } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class Logged extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    logout() {
        localStorage.setItem('loggedIn', false);
    }

    render() {
        return (
            <IconMenu
                {...this.props}
                iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                >
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" containerElement={<Link to="/login" />} onTouchTap={this.logout} />
            </IconMenu>
        )
    }
};